import React, { Component } from 'react';
import { compose, withState, withHandlers, withProps, lifecycle, branch, renderComponent } from 'recompose';
import clip from '../images/paulanovotna-coming-soon.mp4';
import Title from './Title';
import styled from 'styled-components';
import icon from '../css/icon.css';
import style from '../css/style.css';

const VideoClip = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  minWidth: 100%;
  minHeight: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.4;
`

const Button = styled.button`
  background: transparent;
  outline: 0;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer
  right: 30px;
  top: 25px;
  position: fixed;
  zIndex: 999;
`

const Wrapper = styled.div`
  background: #4e4e4e;
  height: 100vh;
`

const withUserData = lifecycle({
  getInitialState() {
    return { loading: true };
  },
  componentDidMount() {
    fetchData().then((data) =>
      this.setState({ loading: false, ...data }));
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
);

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ clip:{clip} }), 1500);
  });
}

const withToggle = compose(
  withState('muted', 'toggle', 'selector', true),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  }),
  withProps(({ muted }) => {
    return {
      selector: muted ? 'icon-volume-mute2' : 'icon-volume-high',
    };
  })
)

const VideoPaula = enhance(({ status, muted, toggle, background }) =>
  <Wrapper>
    <VideoClip muted={muted} autoPlay loop>
      <source src={clip} type="video/mp4"></source>
    </VideoClip>
  </Wrapper>
);

const Status = withToggle(({ status, muted, toggle, selector, background }) =>
  <div>
    <Button onClick={ toggle }>
      <i className={ selector }></i>
    </Button>
    <VideoPaula muted={ muted } autoPlay loop />
  </div>
);

const Video = () => (
  <div>
    <Status />
    <Title />
  </div>
);

export default Video;

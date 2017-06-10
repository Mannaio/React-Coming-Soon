import React, { Component } from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
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
  zIndex: -100;
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
`
const VideoWrapper = styled.div`

`

const withToggle = compose(
  withState('muted', 'toggle', 'selector', true),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  }),
  withProps(({ muted }) => {
    return {
      selector: muted ? 'icon-volume-mute' : 'icon-volume-high',
    };
  })
)

const VideoPaula = ({ status, muted, toggle, selector }) =>
  <VideoClip muted={muted} autoPlay loop>
    <source src={clip} type="video/mp4"></source>
  </VideoClip>
;

const Status = withToggle(({ status, muted, toggle, selector }) =>
  <VideoWrapper>
    <Button onClick={ toggle }>
      <i className={ selector }></i>
    </Button>
    <VideoPaula muted={muted} autoPlay loop />
  </VideoWrapper>
);

const Video = () => (
  <div>
    <Title />
    <Status />
  </div>
);

export default Video;

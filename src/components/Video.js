import React, { Component } from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import clip from '../images/paulanovotna.mp4';
import styled from 'styled-components';
import icon from '../css/icon.css';

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
`

const Button = styled.button`
  background: transparent;
  outline: 0;
  border: 2px solid #5f5f5f;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
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



const Status = withToggle(({ status, muted, toggle, selector }) =>
  <div>
    <Button onClick={ toggle }>
      <i className={ selector }></i>
    </Button>
    <VideoClip muted={muted} autoPlay loop>
      <source src={clip} type="video/mp4"></source>
    </VideoClip>
  </div>
);

const Video = () => (
  <Status />
);

export default Video;

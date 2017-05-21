import React, { Component } from 'react';
import {render} from 'react-dom';
import { compose, withState, withHandlers } from 'recompose';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import clip from '../paulanovotna.mp4';

const withToggle = compose(
  withState('muted', 'toggle', true),
  withHandlers({
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

const Status = withToggle(({ status, muted, toggle }) =>
  <div>
    <video  onClick={ toggle } style={VideoStyle} muted={muted} autoPlay loop>
      { status }
      { muted  }
      <source src={clip} type="video/mp4"></source>
    </video>
  </div>
);


const VideoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  zIndex: '-100',
  transform: 'translateX(-50%) translateY(-50%)'
};

const Video = () => (
  <Status status={ status } />
);

export default Video;

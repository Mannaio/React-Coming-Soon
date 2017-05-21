import React, { Component } from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import clip from '../clip.mp4';

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
  <div>
    <video style={VideoStyle} autoPlay loop>
      <source src={clip} type="video/mp4"></source>
    </video>
  </div>
);

export default Video;

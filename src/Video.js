import React, { Component } from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from './logo.svg';
import './Video.css';

const VideoStyle = {
  position: 'absolute',
  minWidth: '100vw',
  minHeight: '100vh'
};

const Video = () => (
  <div>
    <video style={VideoStyle}></video>
  </div>
);

export default Video;

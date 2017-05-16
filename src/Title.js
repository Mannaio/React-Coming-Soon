import React, { Component } from 'react';
import {render} from 'react-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />;

const secondTitle = overrideProps({ text: 'My new website is under construction' });

const Heading = ({ text }) =>
  <h2 className="">{ text }</h2>;

const SubHeading = secondTitle(Heading);

const Title = () => (
  <div>
    <Heading text="Hi, I am Paula Novotna" />
    <SubHeading text="Ciao" />
  </div>
);

export default Title;

import React, { Component } from 'react';
import {render} from 'react-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />
    }
};

const Heading = ({ text }) =>
  <h2 className="">{ text }</h2>;

const SubHeading = neverRender(Heading);

const Title = () => (
  <div>
    <Heading text="Hi, I am Paula Novotna" />
    <SubHeading text="My new website is under construction" />
  </div>
);

export default Title;

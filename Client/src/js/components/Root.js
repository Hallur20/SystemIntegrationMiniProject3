import React, { Component } from "react";
import ReactDOM from "react-dom";
import FeedbackForm from './FeedbackForm.js';
import Foods from './Foods';
import './../../css/style.css';
class Root extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (<div>
      <center>
      <h1 id="header">The Food Encyclopedia</h1>
      <Foods/></center>
      </div>
    );
  }
}
export default Root;
ReactDOM.render(<Root />, document.getElementById("container"));
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
      <h1 id="header">Hi and welcome to the foodshop! after you have purchased some food, please leave some feedback :)</h1>
      <Foods/>
      <FeedbackForm/>
      </div>
    );
  }
}
export default Root;
ReactDOM.render(<Root />, document.getElementById("container"));
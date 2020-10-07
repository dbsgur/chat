import React, { Component } from "react";
import "./Allmessage.css";

export default class Admin extends React.Component {
  render() {
    return (
      <div className="Admin_main">
        <div className="Admin_name">{this.props.nickname}</div>
        <div className="Admin_body">
          <span> {this.props.message}</span>
        </div>
      </div>
    );
  }
}

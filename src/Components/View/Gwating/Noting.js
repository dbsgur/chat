import React, { Component } from "react";
import "./Gwating.css";
export default class NoTing extends Component {
  //동성은 버튼 못누르게 !
  //이건 이성
  render() {
    return (
      <div>
        <div className="Gwating_tablebox">
          <div className="Gwating_row">
            <div className="Gwating_img">Img</div>
            <div className="Gwating_intro">
              <span>
                {this.props.num} : {this.props.num}
              </span>
              <span>
                {this.props.gender} : {this.props.nick}
              </span>
            </div>
          </div>
          {/* <div className="Gwating_row2">{this.props.openkakao}</div> */}
          <div className="Gwating_row3">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

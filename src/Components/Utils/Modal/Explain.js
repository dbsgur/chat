import React, { Component } from "react";
import "./Moddal.css";

export default class Explain extends Component {
  render() {
    return (
      <div className="Popup_modal">
        <div className="Popupinner_modal">
          <div className="Xbtn_modal">
            <button onClick={this.props.closeUse} className="Xbtn_modal2">
              X
            </button>
          </div>
          <div>
            <text className="Title_mod">설명서</text>
          </div>
          <div className="Span_exp">
            <span className="Style_exp3">1. 매칭을 누른다.</span>
            <span className="Style_exp3">
              2. 매칭이 되면 우측상단의 메시지함 버튼을 누른다.
            </span>
            <span className="Style_exp3">3. 자유로운 채팅을 즐긴다.</span>
            <span className="Style_exp3">
              4. 다음 매칭을 즐기려면 메시지함을 삭제한다.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

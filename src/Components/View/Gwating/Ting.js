import React, { Component } from "react";
import "./Gwating.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default class Ting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
  }

  viewDetail = (e) => {
    e.preventDefault();
    this.setState({
      detail: true,
    });
  };
  closeDetail = (e) => {
    e.preventDefault();
    this.setState({
      detail: false,
    });
  };

  render() {
    return (
      <div>
        <div className="Gwating_tablebox" onClick={this.viewDetail}>
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
          <div className="Gwating_row2">{this.props.openkakao}</div>
          <div className="Gwating_row3">{this.props.content}</div>
        </div>
        <Dialog
          open={this.state.detail}
          onClose={this.closeDetail}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            {this.props.gender}:{this.props.nick}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="Gwating_dialog">
                <div className="Gwating_dialog_num">
                  <span>인원</span>
                  <span>
                    {this.props.num}:{this.props.num}
                  </span>
                </div>
                {this.props.openkakao === "undefined" && (
                  <>
                    <div className="Gwating_mar">오픈채팅주소</div>
                    <div className="Gwating_dialog_add">
                      {this.props.openkakao}
                    </div>
                  </>
                )}

                <div className="Gwating_mar">소개글</div>
                <div className="Gwating_dialog_intro">{this.props.content}</div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

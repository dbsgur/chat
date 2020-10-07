import React, { Component } from "react";
import "./Gwating.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollToBottom from "react-scroll-to-bottom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Ting from "./Ting";
import Noting from "./Noting";
export default class Gwating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plus: false,
      togg: false,
      num: 2,
      nickname: JSON.parse(localStorage.getItem("user")).user_id,
      userid: JSON.parse(localStorage.getItem("user")).user_realid,
      gender: JSON.parse(localStorage.getItem("user")).user_sex,
      content: "",
      gwatable: [],
      openkakao: "",
      modalEvent1: false,
      text: "",
    };
  }
  modalOpen1 = (e) => {
    e.preventDefault();
    this.setState({
      modalEvent1: true,
    });
  };
  modalClose1 = (e) => {
    e.preventDefault();
    this.setState({
      modalEvent1: false,
    });
  };
  goHome = () => {
    window.location.replace("/main");
  };
  modalplus = (e) => {
    e.preventDefault();
    this.setState({
      plus: true,
    });
  };
  modalcloseplus = (e) => {
    e.preventDefault();
    this.setState({
      plus: false,
    });
  };
  openTogg = () => {
    this.setState({
      togg: true,
    });
  };
  closeTogg = () => {
    if (this.state.togg === true) {
      this.setState({ togg: false });
    }
  };
  onClicktwo = () => {
    this.setState({
      num: 2,
      togg: false,
    });
  };
  onClickthree = () => {
    this.setState({
      num: 3,
      togg: false,
    });
  };
  onClickfour = () => {
    this.setState({
      num: 4,
      togg: false,
    });
  };
  // 5명이상
  onClickfive = () => {
    this.setState({
      num: "5↑",
      togg: false,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // input 태그에 연결돼 있는 친군데
    }); // 입력 시 이름에 맞는 state 값이 초기화 된다
  };

  onSubmit = () => {
    const gwating = {
      nickname: this.state.nickname,
      userid: this.state.userid,
      gender: this.state.gender,
      num: this.state.num,
      content: this.state.content,
      openkakao: this.state.openkakao,
    };
    let length = this.state.content;
    if (this.state.content.trim() === "") {
      alert("소개글을 적어주세요");
    } else if (length.length >= 200) {
      alert("200자를 초과했어요");
    } else {
      fetch("api/creategwa", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(gwating),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.boolean === true) {
            alert("글 등록 성공");
            // this.setState({
            //   text: "글 등록 성공",
            //   modalEvent1: true,
            // });

            window.location.replace("/gwating");
          } else {
            // alert("글은 일주일에 하나만 등록가능합니다.");
            this.setState({
              text: "글은 일주일에 하나만 등록가능합니다.",
              modalEvent1: true,
            });
          }
        });
    }
  };
  componentWillMount() {
    fetch("api/readgwa", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((json) => {
        json.map((row) => {
          const newrow = {
            nickname: row.party_userid,
            gender: row.party_gender,
            content: row.party_body,
            num: row.party_number,
            openkakao: row.party_address,
          };
          this.setState({
            gwatable: [...this.state.gwatable, newrow],
          });
        });
      });
  }

  render() {
    return (
      <div className="Gwating_con" onClick={this.closeTogg}>
        <div className="Gwating_title">
          <ArrowBackIcon
            style={{ fontSize: "50px", color: "white" }}
            onClick={this.goHome}
          />
          <div className="Gwating_titleicon">과팅 매칭</div>
          <div className="Gwating_plus" onClick={this.modalplus}>
            글쓰기
          </div>
        </div>
        <ScrollToBottom className="Gwating_table" mode="top">
          {this.state.gwatable.map((gwatings) => {
            if (gwatings.gender === this.state.gender) {
              return (
                <Noting
                  num={gwatings.num}
                  gender={gwatings.gender}
                  content={gwatings.content}
                  nick={gwatings.nickname}
                  // openkakao={gwatings.openkakao}
                />
              );
            } else {
              return (
                <Ting
                  num={gwatings.num}
                  gender={gwatings.gender}
                  content={gwatings.content}
                  nick={gwatings.nickname}
                  openkakao={gwatings.openkakao}
                />
              );
            }
          })}
        </ScrollToBottom>
        <Dialog
          open={this.state.plus}
          onClose={this.modalcloseplus}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle> 방 생성하기</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="Gwating_modal1">
                <div className="Gwating_peo">
                  <span>인원 수</span>
                  <button onClick={this.openTogg} className="Gwating_btn3">
                    {this.state.num}:{this.state.num} ▼
                  </button>
                </div>
                {this.state.togg === true ? (
                  <div className="Gwating_btns">
                    <button className="Gwating_btn4" onClick={this.onClicktwo}>
                      2:2
                    </button>
                    <button
                      className="Gwating_btn4"
                      onClick={this.onClickthree}
                    >
                      3:3
                    </button>
                    <button className="Gwating_btn4" onClick={this.onClickfour}>
                      4:4
                    </button>
                    <button className="Gwating_btn4" onClick={this.onClickfive}>
                      5명이상
                    </button>
                  </div>
                ) : (
                  <div />
                )}
                <textarea
                  className="Gwating_address"
                  placeholder="Kakao open 채팅방 주소를 입력해주세요."
                  onChange={this.onChange}
                  name="openkakao"
                />
                <textarea
                  className="Gwating_modalbody"
                  placeholder="최대 200자까지 가능해요"
                  onChange={this.onChange}
                  name="content"
                />

                <div className="Gwating_btncon">
                  <button className="Gwating_btn1" onClick={this.onSubmit}>
                    생성
                  </button>
                  <button
                    className="Gwating_btn2"
                    onClick={this.modalcloseplus}
                  >
                    뒤로가기
                  </button>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>

        <Dialog
          open={this.state.modalEvent1}
          onClose={this.modalClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.text}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

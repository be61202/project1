import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Signup() {
  // 초기값 세팅-이메일, 비밀번호, 비밀번호확인, 이름, 생년월일, 닉네임
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //유효성 검사
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [nicknameValid, setNicknameValid] = useState(false);

  // 오류메세지 저장
  const [confirmPwErrorMessage, setConfirmPwErrorMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPW(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleCofirmPw = (e) => {
    setConfirmPw(e.target.value);
    setConfirmPwValid(pw === e.target.value);

    if (pw !== e.target.value && e.target.value.length > 0) {
      setConfirmPwValid(false);
      setConfirmPwErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwErrorMessage("");
    }
  };

  const handelName = (e) => {
    setName(e.target.value);
    setNameValid(name === e.target.value);

    if (name.length < 2 || name.length > 5) {
      setNameValid(false);
      setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요.");
    } else {
      setNameMessage("");
    }
  };

  const handelNickname = (e) => {
    setNickname(e.target.value);
    setNicknameValid(nickname === e.target.value);

    if (nickname.length < 2 || nickname.length > 8) {
      setNicknameValid(false);
      setNicknameMessage("이름은 2글자 이상 8글자 이하로 입력해주세요.");
    } else {
      setNicknameMessage("");
    }
  };

  const doSubmit = () => {
    alert('???');
    let joinData = {
      email,
      pw,
      confirmPw,
      name,
      nickname,
    };
    alert(JSON.stringify(joinData));

    joinData = {
      "email" : "be61202@gmail.com",
      "password" : "eqweqwe1@@" ,
      "checkPassword" : "eqweqwe1@@" , 
      "name" : "김예진" ,
      "nickName" : " 비교비교" ,
    };

    axios.post('https://4379c345-ced3-4f3a-b0cb-526fff10f616.mock.pstmn.io?email=email&passward=pw', joinData)
    .then(function (response) {
        // 성공적으로 회원가입되었을 때
        console.log(response.data);
        alert('회원가입 성공!');
        // 추가적인 작업 수행 가능 (예: 페이지 리디렉션)
    })
    .catch(function (error) {
        // 회원가입에 실패했을 때
        console.error(error);
        alert('회원가입 실패. 다시 시도하세요.');
        // 추가적인 작업 수행 가능 (예: 오류 메시지 표시)
    });


  };

  // 출생연도
  useEffect(() => {
    const birthYearEl = document.querySelector("#birth-year");
    let isYearOptionExisted = false;
    birthYearEl.addEventListener("focus", function () {
      //year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isYearOptionExisted) {
        isYearOptionExisted = true;
        for (let i = 1940; i <= 2024; i++) {
          //option element 생성
          const YearOption = document.createElement("option");
          YearOption.setAttribute("value", i);
          YearOption.innerText = i;
          //birthYearEl의 자식 요소로 추가
          this.appendChild(YearOption);
        }
      }
    });

    return () => {
      birthYearEl.removeEventListener("focus", function () {});
    };
  }, []);

  // 출생 월
  useEffect(() => {
    const birthMonthEl = document.querySelector("#birth-month");
    let isMonthOptionExisted = false;
    birthMonthEl.addEventListener("focus", function () {
      //year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isMonthOptionExisted) {
        isMonthOptionExisted = true;
        for (let i = 1; i <= 12; i++) {
          //option element 생성
          const MonthOption = document.createElement("option");
          MonthOption.setAttribute("value", i);
          MonthOption.innerText = i;
          //birthYearEl의 자식 요소로 추가
          this.appendChild(MonthOption);
        }
      }
    });

    return () => {
      birthMonthEl.removeEventListener("focus", function () {});
    };
  }, []);

  // 출생 월
  useEffect(() => {
    const birthDayEl = document.querySelector("#birth-day");
    let isDayOptionExisted = false;
    birthDayEl.addEventListener("focus", function () {
      //year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isDayOptionExisted) {
        isDayOptionExisted = true;
        for (let i = 1; i <= 31; i++) {
          //option element 생성
          const DayOption = document.createElement("option");
          DayOption.setAttribute("value", i);
          DayOption.innerText = i;
          //birthYearEl의 자식 요소로 추가
          this.appendChild(DayOption);
        }
      }
    });

    return () => {
      birthDayEl.removeEventListener("focus", function () {});
    };
  }, []);

  return (
    <div className="page">
      <div className="titleWrap">Sign up</div>

      <div className="contentWrap">
        <div className="inputTitle">E-mail</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <div className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePassword}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        <div className="inputTitle">비밀번호 확인</div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            value={confirmPw}
            onChange={handleCofirmPw}
          />
        </div>
        <div className="errorMessageWrap">
          {!confirmPwValid && confirmPwErrorMessage && (
            <div>{confirmPwErrorMessage}</div>
          )}
        </div>

        <div className="inputTitle">이름</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            value={name}
            onChange={handelName}
          />
        </div>
        <div className="errorMessageWrap">
          {!nameValid && nameMessage && <div>{nameMessage}</div>}
        </div>

        <div className="inputTitle">생년월일</div>
        <div className="info" id="info__birth">
          <select className="box" id="birth-year">
            <option disabled selected>
              출생 연도
            </option>
          </select>
          <select className="box" id="birth-month">
            <option className="box" id="bith-month">
              월
            </option>
          </select>
          <select className="box" id="birth-day">
            <option disabled selected>
              일
            </option>
          </select>
        </div>

        <div className="inputTitle">닉네임</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            value={nickname}
            onChange={handelNickname}
          />
        </div>
        <div className="errorMessageWrap">
          {!nicknameValid && nicknameMessage && <div>{nicknameMessage}</div>}
        </div>
      </div>

      <div>
        <button className="bottomButton" onClick={doSubmit}>
          회원가입
        </button>
      </div>
    </div>
  );
}

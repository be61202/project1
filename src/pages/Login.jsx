import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = {
  email: "test@example.com",
  pw: "test2323@@@",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

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
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      axios
        .post("https://192.168.0.247:8080/login", {
            email: email,
            pw: pw,
        })
        .then(function (response) {
          // 성공적으로 로그인되었을 때
          console.log(response.data);
          alert("로그인 성공!");
          // 추가적인 작업 수행 가능 (예: 페이지 리디렉션)
        })
        .catch(function (error) {
          // 로그인에 실패했을 때
          console.error(error);
          alert("로그인 실패. 다시 시도하세요.");
          // 추가적인 작업 수행 가능 (예: 오류 메시지 표시)
        });

      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("join");
  };
  const handleFindClick = () => {
    navigate("idpw");
  };

  return (
    <div className="page">
      <div className="titleWrap">Login</div>

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

        <div style={{ marginTop: "26px" }} className="inputTitle">
          Password
        </div>
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

        <div className="buttoncontainer">
          <div className="singupBtnWrap">
            <button type="button" onClick={handleSignupClick}>
              회원가입
            </button>
          </div>

          <div className="findBtnWrap">
            <button type="button" onClick={handleFindClick}>
              ID/PW 찾기
            </button>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          className="bottomButton"
        >
          확인
        </button>
      </div>
    </div>
  );
}

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import '../css/find.css'




export default function Find () {
    
    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/change");
    };

    const handleClick1 = () => {
        navigate("/");
        };
    return(
        <div className="findpage">
            <div className="titleWrap" style={{color:'#585857'}}>
                Email/PassWord find
            </div>

            <div className="emailFind">
                <div className="inputF">E-mail 찾기</div>
                <div className="inputSubF">이 름</div>
                <div className="inputwrap">
                    <input
                    type='text'
                    className="input"
                    />
                </div>

                <div className="inputSubF">생년월일</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>

                <button className="findBtn">Find</button>
            </div>

            <div className="pwFind">
                <div className="inputF">password 찾기</div>
                <div className="inputSubF">e-mail</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>

                <div className="inputSubF">name</div>
                <div className="inputwrap">
                    <input
                    type='text'
                    className="input"
                    />
                </div>

                <div className="inputSubF">birth fo date</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>
                
                <button className="findBtn">Find</button>
            </div>

            <div className="changePw">
                <button className="changesubPw" onClick={handleClick}>비밀번호 변경</button>
                <button className="changesubPw" onClick={handleClick1}>로그인 페이지</button>
            </div>

            
        </div>
    )
}

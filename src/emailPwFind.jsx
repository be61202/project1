import React, {useState, useEffect} from "react";

export default function Find () {
    
    return(
        <div className="page">
            <div className="titleWrap">
                email/pw find
            </div>

            <div className="emailFind">
                <div className="inputTitle">E-mail 찾기</div>
                <div className="inputSubTitle">name</div>
                <div className="inputwrap">
                    <input
                    type='text'
                    className="input"
                    />
                </div>

                <div className="inputSubTitle">birth fo date</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>

                <button>Find</button>
            </div>

            <div className="pwFind">
                <div className="inputTitle">password 찾기</div>
                <div className="inputSubtitle">e-mail</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>

                <div className="inputSubTitle">name</div>
                <div className="inputwrap">
                    <input
                    type='text'
                    className="input"
                    />
                </div>

                <div className="inputSubTitle">birth fo date</div>
                <div className="inputwrap">
                    <input
                    type="text"
                    className="input"
                    />
                </div>
                
                <button>Find</button>
            </div>

            <div className="changePw">
                <button>Change Password</button>
            </div>
        </div>
    )
}
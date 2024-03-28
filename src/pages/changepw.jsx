import React, { useState, useEffect } from "react";
import '../css/change.css'

export default function Change() {
  return (
    <div class="container">
      <div class="password-change-form">
        <h2>비밀번호 변경</h2>
        <div class="input-wrap">
          <label for="new-password">새 비밀번호:</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="새 비밀번호를 입력하세요"
          />
        </div>
        <div class="input-wrap">
          <label for="confirm-password">새 비밀번호 확인:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="새 비밀번호를 다시 입력하세요"
          />
        </div>
        <button id="change-password-btn">확인</button>
      </div>
    </div>
  );
}

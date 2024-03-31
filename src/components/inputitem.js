import React, { useEffect, useRef } from 'react';

export const InputItem = () => {

  const btnSwitchRef = useRef(null);
  const isRefrigerator = true;

  const handleSwitchClick = () => {
    if (isRefrigerator) {
      btnSwitchRef.current.textContent = "냉동";
      isRefrigerator = false;
    } else {
      btnSwitchRef.current.textContent = "냉장";
      isRefrigerator = true;
    }
  };

  const selectYearRef = useRef(null);
  const selectMonthRef = useRef(null);
  const selectDayRef = useRef(null);

  useEffect(() => {
    // 컴포넌트 렌더링 이후에 이벤트 리스너를 추가합니다.
    btnSwitchRef.current.addEventListener("click", handleSwitchClick);

    // 옵션 추가
    for (let year = 2024; year <= 2034; year++) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      selectYearRef.current.appendChild(option);
    }

    for (let month = 1; month <= 12; month++) {
      const option = document.createElement("option");
      option.value = month;
      option.textContent = month;
      selectMonthRef.current.appendChild(option);
    }

    for (let day = 1; day <= 31; day++) {
      const option = document.createElement("option");
      option.value = day;
      option.textContent = day;
      selectDayRef.current.appendChild(option);
    }

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
      btnSwitchRef.current.removeEventListener("click", handleSwitchClick);
    };
  }, []); // 빈 배열: 컴포넌트 렌더링 이후에 한 번만 실행되도록 합니다.

  return (
    <div className="input-box">
      <div className="titleWrap">
        <div className="title">상품 추가</div>
      </div>

      <div className="switch-box">
        <button ref={btnSwitchRef} className="btn-switch">
          냉장/냉동
        </button>
      </div>

      <div className="nameWrap">
        <input
          type="text"
          className="input"
          placeholder="상품명을 입력하세요."
        />
      </div>

      <div className="detailWrap">
        <div className="numberWrap">
          <input type="number" className="numberInput" />
        </div>

        <div className="dataWrap">
          <select ref={selectYearRef} className="select-year">
            <option value={""}>년도 선택</option>
          </select>

          <select ref={selectMonthRef} className="select-month">
            <option value={""}>월 선택</option>
          </select>

          <select ref={selectDayRef} className="select-day">
            <option value={""}>일 선택</option>
          </select>
        </div>
      </div>

      <div className="saveBtn">
        <button className="btn-save">저장</button>
      </div>
    </div>
  );
};
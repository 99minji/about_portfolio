import React from "react";
import s from "./Thanksyou.module.scss";

const Thanksyou = () => {
  return (
    <div className="inner">
      <div className={s["thankyou-container"]}>
        <div className={s["thankyou-message"]}>
          <h2>
            ✉️ <br />
            소중한 연락 감사합니다!
          </h2>
          <p>귀사의 요청을 확인한 후 곧 답변드리겠습니다.</p>
          <p>그동안 제 포트폴리오의 다른 프로젝트들도 확인해보세요!</p>
          <a href="/projects" className={s.cta}>
            다른 프로젝트 보러가기 ➡️
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanksyou;

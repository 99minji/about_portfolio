import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-message">
      <h2>
        <MdError size={40} />
        <br />
        페이지를 찾을 수 없습니다.
      </h2>
      <p>
        입력하신 주소는 존재하지 않는 페이지입니다. 다른 경로를 시도해 주세요.
      </p>
      <Link to="/" className="not-found-btn">
        메인으로 가기
      </Link>
    </div>
  );
};

export default NotFound;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Contact.module.scss";

const Contact = () => {
  const [, setSubmitStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 외부 스크립트 로드 함수
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load script");
      };
      document.body.appendChild(script);
    };

    // 외부 스크립트 로드
    loadScript(
      "https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"
    );

    return () => {
      const scripts = document.querySelectorAll(
        'script[src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    // Google Apps Script로 폼 데이터 전송
    fetch(
      "https://script.google.com/macros/s/AKfycbwCpPyPC1-zOqqqpcdkynLqhE1nMgULw91Po8dVxJU5m15Htk8Igq4JcEv7pHU9uYFc/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSubmitStatus(data.message); // Google Apps Script에서 반환한 메시지
        if (data.result === "success") {
          // 성공적인 제출 후, Thank You 페이지로 리디렉션
          navigate("/thanksyou");
        } else {
          // 실패 메시지 처리
          alert("Error submitting the form.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        alert("Error submitting form");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="inner">
        <h2 className="page-title">Contact .</h2>
        <div className={s.contactBox}>
          <form
            className="gform"
            method="post"
            data-email="rnalswl8161@gmail.com"
            onSubmit={handleSubmit}
          >
            <div className={s.input}>
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className={s.input}>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className={s.input}>
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
            </div>
            <div className={s.btn}>
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

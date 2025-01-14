import React from "react";
import s from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className="inner">
      <h2 className="page-title">Contact .</h2>
      {/* <p className={s.contactTxt}>언제든지 연락주세요</p> */}
      <div className={s.contactBox}>
        <form
          action="MAILTO:rnalswl8161@gmail.com"
          method="post"
          encType="text/plain"
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
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

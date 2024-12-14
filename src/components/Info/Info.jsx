import styles from "./Info.module.scss";
import {
  FaBloggerB,
  FaCalendarDays,
  FaEnvelopeOpenText,
  FaGithub,
  FaLocationDot,
  FaMobile,
} from "react-icons/fa6";

export default function Info() {
  return (
    <section className="content-box info">
      <div className={styles["info-area"]}>
        <div className={styles["my-img"]}>
          <img src="/assets/images/avatar.png" alt="프로필" />
        </div>
        <h4 className={styles["my-name"]}>Guminji</h4>
        <span className={styles["my-bio"]}>Frontend Developer</span>
        <ul className={styles["social-link"]}>
          <li>
            <a href="#" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@gumji/posts"
              target="_blank"
              rel="noreferrer"
            >
              <FaBloggerB />
            </a>
          </li>
        </ul>
        <div className={styles["info-contact"]}>
          <div className={styles["contact-box"]}>
            <div className={`${styles["icon"]} ${styles["mobile"]}`}>
              <FaMobile />
            </div>
            <div className={styles["text"]}>
              <span>Phone</span>
              <p>+123 456 7890</p>
            </div>
          </div>
          <div className={styles["contact-box"]}>
            <div className={`${styles["icon"]} ${styles["mobile"]}`}>
              <FaEnvelopeOpenText />
            </div>
            <div className={styles["text"]}>
              <span>Email</span>
              <p>rnalswl96@naver.com</p>
            </div>
          </div>
          <div className={styles["contact-box"]}>
            <div className={`${styles["icon"]} ${styles["mobile"]}`}>
              <FaLocationDot />
            </div>
            <div className={styles["text"]}>
              <span>Location</span>
              <p>Seoul</p>
            </div>
          </div>
          <div className={styles["contact-box"]}>
            <div className={`${styles["icon"]} ${styles["mobile"]}`}>
              <FaCalendarDays />
            </div>
            <div className={styles["text"]}>
              <span>Birthday</span>
              <p>Jan 11, 1996</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

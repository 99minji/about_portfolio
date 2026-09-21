import Link from "next/link";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          사용자가 마주하는 화면부터
          <br />
          서비스가 동작하는 흐름까지
          <br />
          고민하며 개발합니다.
        </h1>
        <p className="hero-intro">
          Frontend Developer
          <br />
          구민지입니다.
        </p>
        <p className="hero-stack">React · TypeScript · React Native</p>
        <Link className="text-link" href="#work">
          프로젝트 보기 <span aria-hidden="true">↓</span>
        </Link>
      </div>
      <div className="hero-signature" aria-hidden="true">
        <span>01</span>
        <p>Interfaces that connect users, data, and meaningful interactions.</p>
      </div>
    </section>
  );
}

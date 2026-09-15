import Link from "next/link";

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          UI를 구현하는 것에서 시작해
          <br />
          서비스를 만드는 개발자로
          <br />
          확장하고 있습니다.
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
        <p>Interfaces that connect people, data, and thoughtful decisions.</p>
      </div>
    </section>
  );
}

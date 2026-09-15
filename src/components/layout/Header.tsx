import Link from "next/link";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href="/" aria-label="구민지">
          구민지
        </Link>
        <nav aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href="#contact" aria-label="Resume 링크 준비 중">
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

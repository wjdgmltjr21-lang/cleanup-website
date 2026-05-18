import Link from "next/link";

export function Header() {
  const nav = [
    ["홈", "/"],
    ["프로젝트", "/projects"],
    ["생성", "/generate"],
    ["구독", "/subscription"],
    ["마이", "/my"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        <Link href="/" className="text-xl font-bold tracking-tight">
<img
  src="/public/logo.png"
  alt="크린업"
  className="w-18"
/>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
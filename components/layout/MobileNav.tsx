import Link from 'next/link';
import { Home, FolderKanban, Sparkles, CreditCard, User } from 'lucide-react';

const items = [
  ['홈', '/', Home], ['프로젝트', '/projects', FolderKanban], ['생성', '/generate', Sparkles], ['구독', '/subscription', CreditCard], ['마이', '/my', User]
] as const;

export function MobileNav() {
  return <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 px-2 py-2 backdrop-blur md:hidden">
    <div className="grid grid-cols-5">{items.map(([label, href, Icon]) => <Link key={href} href={href} className="flex flex-col items-center gap-1 rounded-xl py-2 text-xs text-white/75 active:bg-white/10"><Icon size={18}/>{label}</Link>)}</div>
  </nav>;
}

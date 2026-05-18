import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { MobileNav } from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: '크린업',
  description: 'AI 기반 스토리 창작 SaaS 플랫폼',
  manifest: '/manifest.json'
};
export const viewport: Viewport = { themeColor: '#070A12', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body className="film-grain min-h-screen pb-20 md:pb-0"><Header />{children}<MobileNav /></body></html>;
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Page() {
  const titles: Record<string,string> = { projects:'프로젝트', generate:'AI 콘텐츠 생성', subscription:'구독 관리', my:'마이페이지', login:'로그인', signup:'회원가입', offline:'오프라인' };
  const title = titles['offline'];
  return <main className="mx-auto max-w-4xl px-4 py-12"><Card><h1 className="text-3xl font-bold">{title}</h1><p className="mt-4 text-white/70">이 화면은 실제 기능 연결을 위한 기본 UI입니다.</p><Button className="mt-6">저장하기</Button></Card></main>;
}

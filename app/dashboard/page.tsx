import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return <main className="mx-auto max-w-6xl px-4 py-10">
    <div className="flex items-center justify-between"><div><p className="text-sky">대시보드</p><h1 className="text-3xl font-bold">내 창작 공간</h1></div><Button>새 프로젝트 만들기</Button></div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <Card><p className="text-white/60">현재 요금제</p><h2 className="mt-2 text-2xl font-bold">Free</h2></Card>
      <Card><p className="text-white/60">프로젝트</p><h2 className="mt-2 text-2xl font-bold">0 / 3</h2></Card>
      <Card><p className="text-white/60">AI 생성 작업</p><h2 className="mt-2 text-2xl font-bold">대기 중 0개</h2></Card>
    </div>
    <section className="mt-10"><h2 className="text-xl font-bold">최근 프로젝트</h2><Card className="mt-4"><p className="text-white/70">아직 프로젝트가 없습니다. 첫 번째 이야기를 시작해보세요.</p></Card></section>
  </main>;
}

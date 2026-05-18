# 크리에이터 스튜디오

Next.js + Tailwind + shadcn/ui 스타일 + Supabase + PWA 기본 구조입니다.

## 실행
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Supabase
`supabase/schema.sql` 파일을 Supabase SQL Editor에 붙여넣고 실행하세요.

## 포함된 기능
- Next.js App Router
- Tailwind CSS
- shadcn/ui 스타일 기본 컴포넌트
- Supabase 클라이언트 구조
- Supabase SQL 스키마/RLS
- PWA manifest 및 아이콘
- 모바일 하단 네비게이션
- 랜딩/대시보드 기본 UI
- Edge Function 기본 파일 구조

## 다음 작업
1. Supabase 환경변수 입력
2. 로그인/회원가입 실제 연결
3. 프로젝트 CRUD 연결
4. Toss Payments 실결제 연결
5. Resend 이메일 자동화 연결

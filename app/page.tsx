export default function Home() {
  return (
    <main
      className="min-h-screen bg-black text-white bg-cover bg-left"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('/factory.png')",
      }}
    >
      <section className="px-6 py-8">
        <div className="flex justify-between items-center mb-20">
          <img
  src="/logo.png"
  alt=""
  className="w-24 object-contain"
/>

          <div className="flex gap-8 text-lg font-bold">
            <span>홈</span>
            <span>프로젝트</span>
            <span>생성</span>
            <span>구독</span>
            <span>마이</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-2xl mb-6 font-semibold">
            청결한 세탁 · 정확한 배송 세탁 시스템
          </p>

          <h1 className="text-7xl font-extrabold mb-8">
            세탁 걱정... NO
          </h1>

          <p className="text-3xl font-bold">
            헬스장 · 병원 · 헤어샵 · 마사지샵 전문 세탁
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex flex-col gap-4 w-[260px]">
            <a
              href="tel:01087134363"
              className="bg-cyan-400 text-white py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3"
            >
              📞 010-8713-4363
            </a>

            <a
              href="https://open.kakao.com/"
              target="_blank"
              className="bg-yellow-400 text-black py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3"
            >
              💬 카카오톡상담
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
            <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-700 text-center hover:scale-110 hover:shadow-cyan-400/50 hover:border-cyan-400 transition duration-300">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                산업용 세탁 전문
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                헬스장, 병원, 헤어샵, 마사지샵 등 다양한 업체의 수건과 유니폼을 전문적으로 세탁합니다.
              </p>
            </div>

            <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-700 text-center hover:scale-110 hover:shadow-cyan-400/50 hover:shadow-cyan-400/50 hover:border-cyan-400 transition duration-300">
              <div className="text-5xl mb-4">♨️</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                냄새 제거 시스템
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                땀 냄새와 찌든 냄새 제거를 위한 전문 세탁 시스템 운영
              </p>
            </div>

            <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-700 text-center hover:scale-110 hover:shadow-cyan-400/50 hover:border-cyan-400 transition duration-300">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">
                정확한 배송
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                업체별 분류 및 정확 배송 시스템
              </p>
            </div>

            <div className="bg-gray-900/80 p-6 rounded-2xl border border-gray-700 text-center hover:scale-110 hover:shadow-cyan-400/50 hover:border-cyan-400 transition duration-300">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">
                빠른 상담
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                전화 및 카카오 상담 가능
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32 bg-black/60 p-12 rounded-3xl border border-cyan-400">

  <h2 className="text-5xl font-extrabold text-cyan-400 mb-10 text-center">
    크린업 소개
  </h2>

  <div className="grid grid-cols-4 gap-8 text-center">

    <div>
      <div className="text-6xl mb-4">🚚</div>
      <h3 className="text-2xl font-bold mb-3">빠른 수거</h3>
      <p className="text-gray-300">
        업체 방문 수거 서비스 운영
      </p>
    </div>

    <div>
      <div className="text-6xl mb-4">🧺</div>
      <h3 className="text-2xl font-bold mb-3">전문 세탁</h3>
      <p className="text-gray-300">
        산업용 전문 세탁 장비 사용
      </p>
    </div>

    <div>
      <div className="text-6xl mb-4">♨️</div>
      <h3 className="text-2xl font-bold mb-3">냄새 제거</h3>
      <p className="text-gray-300">
        땀 냄새 및 찌든 냄새 제거
      </p>
    </div>

    <div>
      <div className="text-6xl mb-4">📦</div>
      <h3 className="text-2xl font-bold mb-3">정확 배송</h3>
      <p className="text-gray-300">
        업체별 분류 후 정확 배송
      </p>
    </div>

  </div>
</div>
<div className="mt-32">

  <h2 className="text-5xl font-extrabold text-center text-cyan-400 mb-12">
    세탁 시설 이미지
  </h2>

  <div className="grid grid-cols-3 gap-6">

    <img
      src="/factory.png"
      className="rounded-3xl h-[300px] w-full object-cover hover:scale-105 transition duration-300"
    />

    <img
      src="/factory.png"
      className="rounded-3xl h-[300px] w-full object-cover hover:scale-105 transition duration-300"
    />

    <img
      src="/factory.png"
      className="rounded-3xl h-[300px] w-full object-cover hover:scale-105 transition duration-300"
    />

  </div>
</div>
<div className="mt-32 bg-black/70 p-12 rounded-3xl border border-cyan-400">

  <h2 className="text-5xl font-extrabold text-center text-cyan-400 mb-12">
    상담 문의
  </h2>

  <div className="flex flex-col gap-6 max-w-3xl mx-auto">

    <input
      type="text"
      placeholder="업체명"
      className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-xl"
    />

    <input
      type="text"
      placeholder="연락처"
      className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-xl"
    />

    <textarea
      placeholder="문의 내용을 입력해주세요"
      rows={6}
      className="bg-gray-900 border border-gray-700 rounded-xl p-5 text-xl"
    />

    <button
      className="bg-cyan-400 hover:bg-cyan-300 transition duration-300 text-black text-2xl font-bold py-5 rounded-2xl"
    >
      상담 요청하기
    </button>

  </div>
</div>
      </section>
    </main>
  );
}
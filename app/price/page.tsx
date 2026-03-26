export default function Price() {
  return (
    <main className="min-h-screen bg-white text-black px-8 py-16 relative">
      
      {/* 🔥 왼쪽 상단에 고정된 제목 */}
      <h1 className="absolute top-10 left-10 text-4xl md:text-5xl font-bold">
        이졸드 스냅 정가
      </h1>

      {/* 🔥 나머지 콘텐츠는 중앙 정렬 */}
      <div className="max-w-3xl mx-auto text-center mt-32">

        {/* 메인 가격 */}
        <div className="mb-20">
          <p className="text-6xl md:text-7xl font-medium">
            24만원
          </p>
        </div>

        {/* 시간 추가 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            시간 추가
          </h2>

          <p className="text-xl md:text-2xl font-medium mb-2">
            30분 / 5만원
          </p>

          <p className="text-sm text-gray-500">
            최대 1시간 (총 3시간까지 가능합니다.)
          </p>
        </div>

        {/* 인원 추가 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            인원 추가
          </h2>

          <p className="text-xl md:text-2xl font-medium mb-2">
            1명 / 7만원
          </p>

          <p className="text-sm text-gray-500">
            최대 3명 (총 4명까지 가능합니다.)
          </p>
        </div>

      </div>
    </main>
  );
}

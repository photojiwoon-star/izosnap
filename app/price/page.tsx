export default function Price() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      
      <div className="max-w-md mx-auto space-y-20">

        {/* 가격 */}
        <div className="text-center">
          <p className="text-5xl font-light tracking-wide">
            240,000
          </p>
          <p className="mt-6 text-lg">24만원</p>
          <p className="mt-4 text-lg">2시간 촬영입니다.</p>
        </div>

        {/* 시간 추가 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <p className="text-lg whitespace-nowrap">시간 추가</p>

            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-8"></div>

            <p className="text-lg whitespace-nowrap">30분 / 5만원</p>
          </div>

          <p className="text-sm text-gray-500 text-center">
            최대 1시간 (총 3시간)까지 추가 가능
          </p>
        </div>

        {/* 인원 추가 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <p className="text-lg whitespace-nowrap">인원 추가</p>

            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-8"></div>

            <p className="text-lg whitespace-nowrap">1명 / 7만원</p>
          </div>

          <p className="text-sm text-gray-500 text-center">
            최대 3명 (총 4명)까지 추가 가능
          </p>
        </div>

      </div>
    </main>
  );
}

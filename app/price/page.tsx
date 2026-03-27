export default function Price() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      
      <div className="max-w-xl mx-auto space-y-20">

        {/* 가격 */}
        <div className="text-center">
          <p className="text-5xl font-light tracking-wide">
            240,000
          </p>
          <p className="mt-2 text-lg">24만원</p>
          <p className="mt-4 text-lg">2시간 촬영입니다.</p>
        </div>

        {/* 시간 추가 */}
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-300">
            <p className="text-lg">시간 추가</p>
            <p className="text-lg">30분 / 5만원</p>
          </div>

          <p className="text-sm text-gray-500 text-center">
            최대 1시간 (총 3시간)까지 추가 가능
          </p>
        </div>

        {/* 인원 추가 */}
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-300">
            <p className="text-lg">인원 추가</p>
            <p className="text-lg">1명 / 7만원</p>
          </div>

          <p className="text-sm text-gray-500 text-center">
            최대 3명 (총 4명)까지 추가 가능
          </p>
        </div>

      </div>
    </main>
  );
}

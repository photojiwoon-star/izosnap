export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed text-sm">

        <h1 className="text-2xl font-bold mb-6">FAQ</h1>

        <p>
          1. 졸업가운, 과잠, 일상복 등 환복은 무제한으로 가능합니다.<br/>
          따로 환복 가운을 가져오지 않으신다면 화장실 위치를 고려해서<br/>
          동선을 사전에 짜오시는 게 시간 단축에 효율적입니다.<br/>
          (그리고 옷 캐리어나 가방은 직접 옮기셔야 합니다)
        </p>

        <p>
          2. SNS 업로드는 선택입니다. <br/>
          (다만 작가가 임의로 소정의 금전적인 혜택을 드릴 수 있습니다.)
        </p>

        <p>
          3. 사전에 마음에 드는 장소를 (Ex. 학교 캠퍼스 예쁜 건물) 정해오시는 게 편하고, 안 정해오실 경우 제가 임의로 정합니다.
        </p>

        <p>
          4. 당일 갑자기 변심, 또는 결과물이 마음에 안 들어서와 같은 이유로 환불은 절대 불가합니다.<br /> 
          일반 환불 또한 촬영일 일주일 전까지만 요청 부탁드립니다. 
        </p>

        <p>
          5. 비가 심하게 내릴 경우 촬영은 취소되며 날짜는 상호 조율 후 연기합니다. <br/>
          (날씨로 인한 날짜 변경은 추가금 없음)
        </p>

        <p>
          6. 과한 보정은 하지 않습니다. (사진 망가져서 안 예쁨)
        </p>

        <p>
          7. 모든 파일들은 보정본 전달 후에는 삭제됩니다. 
          <br/>미리 컴퓨터에 다운로드 해두시길 권장합니다.
        </p>

        <p>
          8. 당일 약속 지각 시 15분 경과 후 자동으로 취소되며 
          <br/>환불은 불가합니다.
        </p>

        <p>
          9. 메이크업 제휴 없습니다. 
          <br/>샵 가셔도 되고 직접 메이크업 해서 오셔도 좋습니다.
        </p>

        <h2 className="text-xl font-bold mt-10">아래는 제 워크플로우입니다.</h2>

        <div className="flex justify-center my-8">
         <img
          src="/info.png"
          alt="워크플로우 사진"
          className="w-100 md:w-70 opacity-90"
          /> 
        </div>

      </div>
    </main>
  )
}

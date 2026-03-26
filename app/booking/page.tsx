"use client"

import { useState } from "react"

export default function BookingPage() {
  const [selectedPresets, setSelectedPresets] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) return
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    // 프리셋 배열 추가
    formData.append("presets", selectedPresets.join(", "))

    const response = await fetch("/api/send", {
      method: "POST",
      body: formData,
    })

    if (response.ok) {
      alert("예약 신청이 전송되었습니다")
    } else {
      alert("전송 실패")
    }

    setIsLoading(false)
  }

  const presets = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/presets/preset${i + 1}.jpg`,
  }))

  const togglePreset = (id: number) => {
    if (selectedPresets.includes(id)) {
      setSelectedPresets(selectedPresets.filter((p) => p !== id))
    } else {
      if (selectedPresets.length >= 3) return
      setSelectedPresets([...selectedPresets, id])
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">예약하기</h1>

        <p className="text-xs text-gray-400 text-center mt-2">
          모든 개인정보는 예약 목적으로만 쓰이며 저장되지 않습니다. 촬영 이후 바로 폐기됩니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block font-semibold mb-2">이름</label>
            <input name="name" className="w-full border p-3 rounded" required />
          </div>

          <div>
            <label className="block font-semibold mb-2">원하는 촬영 장소</label>
            <input name="location" className="w-full border p-3 rounded" />

            <p className="text-xs text-gray-400 text-center mt-1">
              개방된 장소만 가능합니다. (Ex. 대학 캠퍼스, 국립중앙박물관, 경복궁 등)
            </p>
          </div>

          <div>
            <label className="block font-semibold mb-2">전화번호</label>
            <input name="phone" className="w-full border p-3 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-2">사진 받을 Email</label>
            <input name="email" className="w-full border p-3 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-2">인스타그램 아이디 (선택)
            </label>
            <input
            type="text"
            name="instagram"
            placeholder="@username"
            className="w-full border p-3 rounded text-black"
           />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              원하는 시간대, 요일 (Ex. 월요일만 돼요, 목요일 빼고 다 돼요)
            </label>
            <textarea name="schedule" className="w-full border p-3 rounded" />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              FAQ 숙지 및 동의 여부
            </label>
            <select name="consent" className="w-full border p-3 rounded">
              <option>확인 및 동의함</option>
              <option>안읽었음</option>
            </select>

            <p className="text-xs text-gray-400 text-center mt-2">
              '안읽었음' 선택 시 예약 불가합니다.
            </p>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              인원 추가 여부
            </label>
            <select name="extraPeople" className="w-full border p-3 rounded">
              <option>없음</option>
              <option>1명 추가</option>
              <option>2명 추가</option>
              <option>3명 추가</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              시간 추가 여부
            </label>
            <select name="extraTime" className="w-full border p-3 rounded">
              <option>없음</option>
              <option>30분 추가</option>
              <option>1시간 추가</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              보정 방향 / 콤플렉스
            </label>
            <textarea name="correction" className="w-full border p-3 rounded" />
          </div>

          <div className="space-y-4">
            <label className="block font-semibold">
              프리셋 선택 (최대 3개)
            </label>

            <div className="flex flex-wrap gap-3">
              {presets.map((preset) => {
                const isSelected = selectedPresets.includes(preset.id)

                return (
                  <div
                    key={preset.id}
                    onClick={() => togglePreset(preset.id)}
                    className={`relative w-16 h-16 rounded-md cursor-pointer ${
                      isSelected
                        ? "border-4 border-black"
                        : "border border-gray-300"
                    }`}
                  >
                    <img
                      src={preset.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-4 rounded text-lg font-semibold ${
              isLoading
                ? "bg-gray-400"
                : "bg-black text-white"
            }`}
          >
            {isLoading ? "전송 중..." : "예약 신청하기"}
          </button>

          <p className="text-xs text-gray-400 text-center mt-0">
            전송 중입니다. 10초 정도 소요될 수 있습니다.
          </p>
        </form>
      </div>
    </main>
  )
}

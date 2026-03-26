
import Link from "next/link";

export default function Home() {
  const menu = [
    { title: "이졸드 소개", link: "/about" },
    { title: "가격 안내", link: "/price" },
    { title: "FAQ", link: "/faq" },
    { title: "예약하기", link: "/booking" },
  ];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-10">
      
      {/* 타이틀 */}
      <h1 className="text-5xl md:text-7xl font-light mb-20 tracking-wide">
        Isolde Photo
      </h1>

      {/* 2x2 그리드 */}
      <div className="grid grid-cols-2 gap-16">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center group"
          >
            {/* 🔥 이미지 박스 */}
            <div className="w-64 h-40 rounded-2xl mb-3 overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img
                src={`/home${index + 1}.png`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 텍스트 */}
            <p className="text-xl tracking-wide transition-transform duration-200 group-hover:scale-105">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

    </main>
  );
}

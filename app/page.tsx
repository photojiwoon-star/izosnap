import Link from "next/link";

export default function Home() {
 const menu = [
   { title: "이졸드 소개", link: "/about" },
   { title: "가격 안내", link: "/price" },
   { title: "FAQ", link: "/faq" },
   { title: "예약하기", link: "/booking" },
 ];

 return (
   <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12 overflow-x-hidden">
    
     {/* 타이틀 */}
     <h1 className="text-4xl md:text-7xl font-light mb-12 md:mb-20 tracking-wide text-center">
       Isolde Photo
     </h1>

     {/* 2x2 그리드 */}
     <div className="grid grid-cols-2 gap-6 md:gap-16 w-full max-w-md md:max-w-5xl">
       {menu.map((item, index) => (
         <Link
           key={index}
           href={item.link}
           className="flex flex-col items-center group"
         >
           {/* 🔥 이미지 박스 */}
           <div className="w-full aspect-[4/3] md:w-64 md:h-40 rounded-2xl mb-3 overflow-hidden transition-all duration-300 group-hover:scale-105">
             <img
               src={`/home${index + 1}.png`}
               alt={item.title}
               className="w-full h-full object-cover"
             />
           </div>

           {/* 텍스트 */}
           <p className="text-sm md:text-xl tracking-wide transition-transform duration-200 group-hover:scale-105 text-center">
             {item.title}
           </p>
         </Link>
       ))}
     </div>

   </main>
 );
}

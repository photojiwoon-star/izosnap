export default function About() {
 return (
   <main className="min-h-screen bg-white text-black px-6 py-12 md:p-10">
     <h1 className="text-3xl md:text-4xl mb-8">이졸드 스냅 소개</h1>

     <div className="text-base md:text-lg leading-relaxed max-w-2xl space-y-4">

      <p>
       손님이 원하는 장소에서 원하는 의상으로 찍습니다. <br />
       서울 소재 대학, 경복궁, 벚꽃시즌 석촌호수 등 개방된 곳이라면 어디든 갑니다.<br />
       가운을 입으면 졸업스냅이 되고, 애인을 데려오면 커플스냅이 됩니다.
      </p>

      <p>
       다만 이졸드 스냅은 몇 개월 후 폐업합니다. (작가 체력 및 수험 이슈..) <br />
       이졸드의 사진을 원하신다면 빠른 예약 부탁드립니다.
      </p>

      {/* 🔥 여기만 수정됨 */}
      <h1 className="text-3xl md:text-4xl mt-20 md:mt-28 mb-8">
        작가 소개
      </h1>

      <p>
       안녕하세요 사진작가 이졸드입니다.
      </p>

      <p>
       거창한 수식어는 없고, 그냥 사람을 예쁘게 찍는 데 진심인 사람입니다. <br />
       빛과 색감에 집착이 심합니다.
      </p>
    
      <p>
       요즘 고민이 있다면, 저를 찾는 고객님들이 다들 과하게 예쁩니다. <br />
       그래서 촬영이 자꾸 길어집니다. <br />
       셔터가 곧 탈골될까 걱정입니다.
      </p>

      <p>
       다행히도 대부분은 제 사진에 크게 만족해 주십니다. <br />
       최선을 다하겠습니다.
      </p>
     
     </div>
   </main>
 );
}

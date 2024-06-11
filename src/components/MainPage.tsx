import Image from "next/image";

export default function MainPage() {
  return (
    <div className="relative font-xxx flex h-screen w-screen flex-col items-center justify-center bg-[url('/main-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mb-28 flex flex-col items-center gap-32">
        <div className="text-5xl font-medium italic text-[#9F751C]">Назира</div>
        <div className="text-3xl italic text-[#A27821]">Қыз ұзату</div>
      </div>
      <div className="absolute bottom-0">
        <div className="relative flex items-center justify-center">
          <Image
            src="/mus-bg.png"
            alt="music"
            width={135}
            height={135}
            priority
            className="animate-spin-slow"
          />
          <Image
            src="/mus.webp"
            alt="music"
            width={80}
            height={80}
            className="absolute"
          />
        </div>
        <div className="relative mb-5 mt-[-40px] flex rotate-90 items-center justify-center">
          <div className="h-56 border-[0.5px] border-[#CC9B33]"></div>
          <div className="absolute h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
          <div className="absolute left-10 -rotate-90 text-2xl text-[#CC9B33]">
            03/08/2024
          </div>
        </div>
      </div>
    </div>
  );
}

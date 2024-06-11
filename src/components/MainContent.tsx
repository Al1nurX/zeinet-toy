import Image from "next/image";

export default function MainContent() {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="mb-8 text-center text-xl text-[#98761A]">
        Шаңырақтың шаттығысың, шырағы, <br /> Текті жердің тұяғысың, ақ гүлі.{" "}
        <br /> Мың жыл құда болуға да атты күн, <br /> Екі жасқа құдай берсін
        бақ бүгін.
      </div>
      <div className="mb-8 text-center text-2xl uppercase">
        Құрметті ағайын-туыс <br />
        бауырлар, құда-жекжат, <br /> нағашы-жиен, бөлелер, <br /> дос-жараңдар,
        әріптестер, <br /> көршілер!
      </div>
      <div className="mb-8 text-center text-2xl uppercase">
        сіз(дер)ді <br /> аяулы қызымыз
      </div>
      <div className="mb-8 text-3xl text-[#98761A]">Назираның</div>
      <div className="mb-8 text-center text-2xl uppercase">
        ұзату тойына <br /> арналған салтанатты <br /> ақ дастарханымыздың{" "}
        <br />
        қадірлі қонағы болуға <br />
        шақырамыз!
      </div>
      <div className="relative mx-10 mb-16 flex h-[60vh] w-[80%] flex-col items-center rounded-xl bg-[url('/girl.webp')] bg-cover bg-center bg-no-repeat">
        <div className="py-6 text-2xl text-[#846718]">Той Салтанаты:</div>
        <div className="flex flex-col pt-8 text-center uppercase text-[#846718]">
          <div className="text-2xl">тамыз</div>
          <div className="py-2 text-5xl font-bold">3</div>
          <div className="text-2xl">2024 жыл</div>
          <div className="absolute bottom-10 flex flex-col text-[#846718]">
            <div className="text-2xl">Басталуы</div>
            <div className="text-5xl font-bold">18:00</div>
          </div>
        </div>
      </div>
      <div className="mb-8 text-2xl text-[#846718]">Тойдың бағдарламасы:</div>
      <div className="relative grid grid-cols-2 items-center gap-x-10 text-center">
        <div className="text-xl">
          17:30 <br /> қонақтардың <br /> жиналуы
        </div>
        <Image src="/bg-1.webp" alt="background" width={100} height={100} className="mx-auto relative bottom-3" />
        <Image src="/bg-2.webp" alt="background" width={100} height={100} className="mx-auto relative bottom-1" />
        <div className="text-xl">
          18:00 <br /> тойдың <br /> басталуы
        </div>
        <div className="text-xl">
          00:00 <br /> ұзату <br /> рәсімі
        </div>
        <Image src="/bg-3.webp" alt="background" width={100} height={100} className="mx-auto relative bottom-1" />
        <div className="absolute left-[50%] h-full border-[0.5px] border-[#98761A]"></div>
        <div className="absolute left-[47.5%] top-[10%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
        <div className="absolute left-[47.5%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
        <div className="absolute bottom-[10%] left-[47.5%] h-4 w-4 rounded-[50%] bg-[#CC9B33]"></div>
      </div>
    </div>
  );
}

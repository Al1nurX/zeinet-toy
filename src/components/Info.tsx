"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Info() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-08-03`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div className="mb-8 text-2xl text-[#846718]">Мекен-жайымыз:</div>
      <div className="mb-12 text-center text-2xl uppercase">
        Шонжы ауылы, <br /> &quot;Хан тәңірі&quot; <br /> мейрамханасы
      </div>
      <div className="mb-4 text-center text-xl uppercase">
        Сізге жетуге ыңғайлы <br /> болу үшін картаны басыңыз!
      </div>
      <Image
        src="/2gis.jpeg"
        alt="2gis"
        width={60}
        height={60}
        className="mb-12 rounded-2xl"
      />
      <div className="mb-4 text-2xl text-[#846718]">Той иелері:</div>
      <div className="mb-2 text-2xl text-[#846718]">Сейсенғали & Назым</div>
      <Image
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-6"
      />
      <div className="mb-4 mt-[-20px] text-2xl text-[#846718]">Дресс-код:</div>
      <div className="mb-8 flex items-center justify-center gap-16">
        <div className="flex flex-col text-center">
          <Image src="/men.png" alt="men clothes" width={100} height={100} />
          <div className="text-xl uppercase">
            Ерлер <br /> қауымы
          </div>
        </div>
        <div className="flex flex-col text-center">
          <Image
            src="/women.png"
            alt="women clothes"
            width={100}
            height={100}
          />
          <div className="text-xl uppercase">
            Әйелдер <br /> қауымы
          </div>
        </div>
      </div>
      <div className="relative flex h-[70vh] w-full items-center justify-center bg-[url('/shanyraq.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6 text-3xl text-[#FCF7F7]">
            Той салтанатына дейін:
          </div>
          <div className="font-comfortaa flex space-x-4 text-[#FFFFFF]">
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.days} :</div>
              <div className="text-md text-[#FCF7F7]">күн</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.hours} :</div>
              <div className="text-md text-[#FCF7F7]">сағат</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.minutes} :</div>
              <div className="text-md text-[#FCF7F7]">минут</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">{timeLeft.seconds}</div>
              <div className="text-md text-[#FCF7F7]">секунд</div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/decor.png"
        alt="decor"
        width={200}
        height={200}
        className="mx-auto w-[70%] -rotate-[190deg]"
      />
    </div>
  );
}

"use client"
import { MainDBEng } from "@/app/lib/db";
import Image from "next/image";
import { useState } from "react";

export default function AboutMain() {
  const [aboutData,setAboutData] = useState(MainDBEng[0])

  return (
    <section>
      <div className="h-[80px]"></div>
      <div className="mt-4">
        <Image
          className="m-auto rounded-[50%] border-white border-2"
          src={aboutData.myImg}
          alt="myPic"
          width={250}
          height={250}
        />
      </div>
      <div className="w-[80%] m-auto mt-4 mb-4 bg-blue-950/40 pt-6 pb-6 pr-4 pl-4 rounded-lg">
        {aboutData.mainComment.split('\n').map((item, index)=>{
          return <p key={index} className="text-white">{item} <br/></p>
        })}
      </div>
    </section>
  );
}

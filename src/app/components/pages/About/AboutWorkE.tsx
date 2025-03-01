"use client"
import { useHeaderAnimeContext } from "@/app/context/HeaderAnimation";
import { MainDBEng } from "@/app/lib/db";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AboutWorkE() {
  const [aboutData,setAboutData] = useState(MainDBEng[0])
  const {isHeaderClose} = useHeaderAnimeContext();
  const aboutWorkAnime = gsap.timeline()

  useEffect(() => {
    aboutWorkAnime
    .to(".aboutWorkAnime", { scaleY: 1, duration: 0.5, stagger:0.5},0.5)

    return () => {
      aboutWorkAnime.kill();
    };
  }, []);
  
  useEffect(()=>{
    if(isHeaderClose){
      aboutWorkAnime
      .to(".aboutWorkAnime", { scaleY: 0, duration: 0.5 },0.5)
    }
    return () => {
      aboutWorkAnime.kill();
    }; 
  },[isHeaderClose])

  return (
    <section id="work" className="w-[100%] min-h-[100vh] overflow-x-hidden">
      <div className="mb-4 bg-blue-900/60 border-t-2 border-l-2 border-r-2 border-gray-200/60 aboutWorkAnime scale-y-0">
        {aboutData.workExperience.map((item,index)=>{
          return <div key={index}>
            <div className="flex items-strech border-b-2 border-gray-200/60">
              <div className="h-auto basis-1/2">
                <h2 className="w-[80%] m-auto text-white text-center pt-3 pb-3 font-bold text-2xl">{item.companyName}</h2>
                <p className="w-[80%] m-auto text-white">{item.contents}</p>
              </div>
              <div className="basis-1/2 border-l-2 border-gray-200/60">
                <Image
                  className="m-auto p-4"
                  src={item.companyImg}
                  alt={item.companyName}
                  width={400}
                  height={250}
                />
              </div>
            </div>

          </div>
        })}
      </div>
      
    </section>
  );
}

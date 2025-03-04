"use client"
import { useHeaderAnimeContext } from "@/app/context/HeaderAnimation";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslateContext } from "@/app/context/Translate";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Style from "./About.module.css"

export default function AboutWorkE() {
  const {data} =useTranslateContext();
  const aboutData = data[0]

  const {isHeaderClose} = useHeaderAnimeContext();
  const aboutWorkAnime = gsap.timeline()

  useEffect(() => {
    gsap.set(".aboutWorkAnime", {
      transformOrigin: "top"
    });
    gsap
      .to(".aboutWorkAnime", {
        scaleY: 1,
        duration: 0.5,
        scrollTrigger:{
          trigger:".aboutWorkAnime",
          start:"center center",
          toggleActions: "play none none none",
          markers: true
    }})
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
            <div className={`flex items-strech border-b-2 border-gray-200/60 ${Style.workContainer}`}>
              <div className="h-auto basis-1/2 pb-4">
                <h2 className="w-[80%] m-auto text-white text-center pt-3 pb-3 font-bold text-2xl">{item.companyName}</h2>
                <p className="w-[80%] m-auto text-white">{item.contents}</p>
              </div>
              <div className={`basis-1/2 border-l-2 border-gray-200/60 ${Style.workImgContainer}`}>
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

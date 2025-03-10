"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderAnimeContext } from "@/app/(context)/HeaderAnimation";
gsap.registerPlugin(useGSAP,ScrollTrigger);

interface SectionDivProp {
  sectionName:string;
  index:number;
}

const SectionDivider = ({sectionName,index}:SectionDivProp) => {
  const {isHeaderClose} = useHeaderAnimeContext();
  useEffect(() => {
    gsap.set(`.sectionDivider-${index}`, {
      transformOrigin: "top"
    });
    gsap
      .to(`.sectionDivider-${index}`, {
        scaleY: 1,
        duration: 0.5,
        scrollTrigger:{
          trigger:`.sectionDivider-${index}`,
          start:"center center",
          toggleActions: "play none none none",
    }})
  }, [index]);

  useEffect(()=>{
    if(isHeaderClose){
      gsap
      .to(".sectionDivider", { scaleY: 0, duration: 0.5 })
    }
  },[isHeaderClose])

  return (
    <div className={`w-[100%] h-[250px] relative scale-y-0 sectionDivider sectionDivider-${index}`}>
      <div className="w-[2px] h-[100px] bg-gray-50/60 absolute top-0 left-[50%] translate-x-[-50%]"></div>
      <h2 className="text-white text-3xl text-center pt-[100px] pb-2">{sectionName}</h2>
      <div className="w-[2px] h-[50px] bg-gray-50/60 absolute left-[50%] translate-x-[-50%]"></div>
    </div>
  );
};

export default SectionDivider;

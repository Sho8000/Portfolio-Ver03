"use client"
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderAnimeContext } from "@/app/(context)/HeaderAnimation";
import { useTranslateContext } from "@/app/(context)/Translate";
import Style from "./About.module.css"
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AboutProject() {
  const {data} =useTranslateContext();
  const aboutData = data[0]

  const {isHeaderClose} = useHeaderAnimeContext();
  const aboutProAnime = gsap.timeline()

   useEffect(() => {
    gsap.set(".aboutProAnime", {
      transformOrigin: "top"
    });
    gsap
      .to(".aboutProAnime", {
        scaleY: 1,
        duration: 0.5,
        scrollTrigger:{
          trigger:".aboutProAnime",
          start:"center center",
          toggleActions: "play none none none",
      }})
    }, []);
  
    useEffect(()=>{
      if(isHeaderClose){
        aboutProAnime
        .to(".aboutProAnime", { scaleY: 0, duration: 0.5 },0.5)
      }
    },[isHeaderClose])
  
  const goToProjectPage = () => {
//    window.location.href = `/project`
//    add hover action
  }

  return (
    <section id="project" className="w-[100%] min-h-[100vh] overflow-x-hidden">
      <div className="mb-4 bg-blue-900/60 border-t-2 border-l-2 border-r-2 border-gray-200/60 aboutProAnime scale-y-0">
        {aboutData.project.map((item,index)=>{
          return <div key={index}>
            <div className={`flex items-strech border-b-2 border-gray-200/60 ${Style.projectContainer}`}>
              <div className={`basis-1/2 border-r-2 border-gray-200/60 ${Style.imgContainer}`}>
                <div className="hover:scale-105 cursor-pointer" onClick={goToProjectPage}>
                  <Image
                    className="m-auto p-4"
                    src={item.imgUrl}
                    alt={item.projectName}
                    width={400}
                    height={250}
                  />
                </div>
              </div>
              <div className="h-auto basis-1/2">
                <div className="flex justify-center">
                {item.skillImg.map((skill,index)=>
                  <div key={index}>
                    <Image
                      src={skill}
                      alt="skillPic"
                      width={90}
                      height={90}
                    />
                    <p className="text-white text-lg font-bold text-center pb-2">{item.skillName[index]}</p>
                  </div>)
                }
                </div>
                <p className="w-[80%] m-auto text-white">{item.explain}</p>
                <div className="w-[80%] m-auto flex justify-between items-center flex-wrap mt-3 mb-3">
                  <p className="text-white text-center"><a href={item.githubUrl}><span className="font-bold underline">GitHub</span></a></p>
                  <p className="text-white">date : {item.createdDate}</p>
                </div>
              </div>
            </div>

          </div>
        })}
      </div>
    </section>
);
}

"use client"
import CircleProgressBar from "../../parts/CircleProgressBar/CircleProgressBar";
import { BtnWithCircle } from "../../parts/Button/Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useLandingAnimeContext } from "@/app/context/LandingAnimation";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function LandingPage() {
  const {isLandingUnderbarDone,changeLandingUnderStatus} = useLandingAnimeContext();
  const landingAnimation = gsap.timeline();
  const landingClickAnimation = gsap.timeline();

  useEffect(() => {
    landingAnimation
      .to(".deleteCircle",{opacity:0},1.5)
      .to(".landingNameAnime",{y:`-=100%`})
      .fromTo(".landingContentsAnime",{y:400,opacity:0},{y:0,opacity:1},"<")
      return () => {
        landingAnimation.kill();
      };
    }, []);
    
    useEffect(()=>{
      if(isLandingUnderbarDone){
        landingClickAnimation
        .to(".landingBtnAnime3",{scaleY:0,transformOrigin:"top"})
        .to(".landingBtnAnime2",{scaleY:0,transformOrigin:"top"})
        .to(".landingBtnAnime1",{scaleY:0,transformOrigin:"top"})
        .then(()=>{
          changeLandingUnderStatus();
          window.location.href = `/home`;
        })
      }

      return () => {
        landingClickAnimation.kill();
      };
    },[isLandingUnderbarDone])
  
  return (
    <section className={`w-[100vw] h-[100vh] overflow-hidden relative`}>
      <div className="relative w-[450px] h-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] deleteCircle">
          <CircleProgressBar/>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] landingNameAnime">
          <h1 className="text-3xl font-bold  text-white landingBtnAnime1">Sho Yoshimura</h1>
        </div>
        <div className="absolute w-[400px] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] landingContentsAnime opacity-0">
          <div className="landingBtnAnime2">
            <p className="text-white text-xl text-center">Turn on your sound to enjoy!</p>
          </div>
          <div className="flex justify-center gap-4 landingBtnAnime3">
            <div>
              <BtnWithCircle btnWithCircleType={{text:"Preparing" ,radius:8 ,type:"fill", color:"white", moveTo:'home'}} />
            </div>
            <div>
              <BtnWithCircle btnWithCircleType={{text:"Sound OFF" ,radius:8 ,type:"stroke", color:"white", moveTo:'home'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

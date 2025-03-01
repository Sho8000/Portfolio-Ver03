"use client"

import { useHeaderAnimeContext } from "@/app/context/HeaderAnimation";
import { HbgMenu } from "../../parts/svg/AllSvgs";
import Style from "./Header.module.css"
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Header() {
  const headAnimation = gsap.timeline();
  const {isHeaderClose ,headerState} = useHeaderAnimeContext();

  useEffect(() => {
    headAnimation
      .to(".navCloseAnime", { scaleY: 1, duration: 0.5 })
      .then(()=>{
        headerState(false)
      })

    return () => {
      headAnimation.kill();
    };
  }, []);

  useEffect(()=>{
    if(isHeaderClose){
      headAnimation
      .to(".navCloseAnime", { scaleY: 0, duration: 0.5 })
    }
  },[isHeaderClose])

  const goToHome = () => {
    headerState(true)
  }

  return (
    <>
      <nav className={`fixed w-[100%] h-[80px] border-b-2 border-gray-400 p-4 z-10 ${Style.headBG}`}>
        <div className="flex justify-between items-center navCloseAnime scale-y-0">
          <button onClick={goToHome}>
            <h2 className="text-white text-4xl font-bold">Sho Yoshimura</h2>
          </button>
          <HbgMenu/>
        </div>
      </nav>
    </>
  );
}

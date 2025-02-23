"use client"
import { Btn } from "../../parts/Button/Button";
import Stardust from "../../parts/StardustBG/Stardust";
import { CloseBtn } from "../../parts/svg/AllSvgs";
import Style from "./Sidebar.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useHbgBtnContext } from "@/app/context/HbgContext";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Sidebar() {
  const {hbgState, closeSide} = useHbgBtnContext();
  const sidebarRef = useRef(null)
  const sidebarAnimation = useRef(gsap.timeline({paused:true}));
  const sidebarItemAnimation = useRef(gsap.timeline({paused:true}));

  useEffect(() => {
    sidebarAnimation.current
      .to(sidebarRef.current, { x: 0, duration: 0.5, transformOrigin: "right" })
      .reverse(); // Start in a reversed state (hidden)

    sidebarItemAnimation.current
      .fromTo(".itemAnimation",{scaleY:0},{scaleY:1,stagger:0.5})
      .reverse();

    return () => {
      sidebarAnimation.current.kill();
      sidebarItemAnimation.current.kill();
    };
  }, []);

  useEffect(()=>{
    if(hbgState){
      sidebarAnimation.current
        .play()
        .then(()=>{
          sidebarItemAnimation.current.play();
        })
    } else {
      sidebarItemAnimation.current
        .reverse()
        .then(()=>{
          sidebarAnimation.current.reverse();
        })
    }

    return () => {
      sidebarAnimation.current.kill();
      sidebarItemAnimation.current.kill();
    }; 
  },[hbgState])

  const closeBtnHandler = () => {
    closeSide();
  }

  return (
    <>
      <div ref={sidebarRef} className={`fixed max-w-[100vw] w-[320px] h-[99vh] translate-x-[320px] right-0 z-10 overflow-hidden border-l-2 border-gray-400 ${Style.mainBG}`}>
        <Stardust/>
          <div className="flex flex-col mt-5">
            <div className="ml-auto pr-4 w-fit itemAnimation" onClick={closeBtnHandler}>
              <CloseBtn/>
            </div>
            <div className="flex flex-col justify-center w-fit gap-10 ml-5">
              <div className="itemAnimation">
                <Btn btnType={{text:"About Me", moveTo:"about"}}/>
              </div>
              <div className="itemAnimation">
                <Btn btnType={{text:"Work Experience", moveTo:""}}/>
              </div>
              <div className="itemAnimation">
                <Btn btnType={{text:"Project", moveTo:"project"}}/>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

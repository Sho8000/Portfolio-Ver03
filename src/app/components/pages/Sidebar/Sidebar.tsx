"use client"
import { Btn } from "../../parts/Button/Button";
import Stardust from "../../parts/StardustBG/Stardust";
import { CloseBtn } from "../../parts/svg/AllSvgs";
import Style from "./Sidebar.module.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHbgBtnContext } from "@/app/context/HbgContext";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Sidebar() {
  const {hbgState, closeSide} = useHbgBtnContext()
  const sidebarRef = useRef(null)
  const sidebarAnimation = useRef(gsap.timeline());

  useEffect(()=>{
    if(hbgState){
      sidebarAnimation.current
        .to(sidebarRef.current,{x:0 ,duration:1,transformOrigin:"right"})
    } else {
      sidebarAnimation.current
        .to(sidebarRef.current,{x:"100%" ,duration:1,transformOrigin:"right"})
    }

    return () => {
      sidebarAnimation.current.kill();
    }; 
  },[hbgState])

  const closeBtnHandler = () => {
    closeSide();
  }

  return (
    <>
      <div ref={sidebarRef} className={`fixed max-w-[100vw] w-[320px] h-[99vh] translate-x-[320px] right-0 z-10 overflow-scroll border-l-2 border-gray-400 ${Style.mainBG}`}>
        <Stardust/>
          <div className="flex flex-col mt-5">
            <div className="text-right pr-4" onClick={closeBtnHandler}>
              <CloseBtn/>
            </div>
            <div className="flex flex-col justify-center w-fit gap-10 ml-5">
              <Btn btnType={{text:"About Me", moveTo:"about"}}/>
              <Btn btnType={{text:"Work Experience", moveTo:""}}/>
              <Btn btnType={{text:"Project", moveTo:"project"}}/>
              <Btn btnType={{text:"Contact", moveTo:"contact"}}/>
            </div>
          </div>
        </div>
    </>
  );
}

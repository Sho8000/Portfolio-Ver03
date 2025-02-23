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
import { useRouter } from "next/navigation";
import { useSideAnimeContext } from "@/app/context/SidebarAnimation";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Sidebar() {
  const router = useRouter();
  const {hbgState,linkTo, closeSide,setLinkTo} = useHbgBtnContext();
  const {sidebarRef,sidebarAnimation} = useSideAnimeContext();

  useEffect(() => {
    sidebarAnimation.current
      .to(sidebarRef.current, { x: 0, duration: 0.5, transformOrigin: "right" })
      .to(".itemAnimation",{scaleY:1,stagger:0.5})
      .reverse(); // Start in a reversed state (hidden)

    return () => {
      sidebarAnimation.current.kill();
    };
  }, []);

  useEffect(()=>{
    if(hbgState){
      setLinkTo(null)
      sidebarAnimation.current.play()
    } else {
      sidebarAnimation.current.reverse()
      .then(()=>{
        if(linkTo){
          router.push(`/${linkTo}`)
        }
      })
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
      <div ref={sidebarRef} className={`fixed max-w-[100vw] w-[320px] h-[100vh] translate-x-[320px] right-0 z-10 overflow-hidden border-l-2 border-gray-400 ${Style.mainBG}`}>
        <Stardust/>
          <div className="flex flex-col mt-5">
            <div className="ml-auto pr-4 w-fit itemAnimation scale-y-0" onClick={closeBtnHandler}>
              <CloseBtn/>
            </div>
            <div className="flex flex-col justify-center w-fit gap-10 ml-5">
              <div className="itemAnimation scale-y-0">
                <Btn btnType={{text:"About Me", moveTo:"about"}}/>
              </div>
              <div className="itemAnimation scale-y-0">
                <Btn btnType={{text:"Work Experience", moveTo:"about/#work"}}/>
              </div>
              <div className="itemAnimation scale-y-0">
                <Btn btnType={{text:"Project", moveTo:"about/#project"}}/>
              </div>
              <div className="itemAnimation scale-y-0">
                <Btn btnType={{text:"Project Links", moveTo:"project"}}/>
              </div>
              <div className="itemAnimation scale-y-0">
                <Btn btnType={{text:"Contact", moveTo:""}}/>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

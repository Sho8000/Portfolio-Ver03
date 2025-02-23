"use client"
import { useRouter } from "next/navigation";
import Style from "./Button.module.css"
import { CircleSVG } from "../svg/AllSvgs";
import { useHbgBtnContext } from "@/app/context/HbgContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSideAnimeContext } from "@/app/context/SidebarAnimation";
gsap.registerPlugin(useGSAP,ScrollTrigger);

interface BtnProps {
  text:string;
  moveTo:string;
}

interface BtnType {
  btnType:BtnProps
}

interface BtnWithCircleProps{
  text:string;
  moveTo:string;
  radius:number;
  type:"fill"|"stroke";
  color:string;
}

interface BtnWithCircleType {
  btnWithCircleType:BtnWithCircleProps
}

export const Btn = ({btnType}:BtnType) => {
  const {closeSide,setLinkTo} = useHbgBtnContext();
  const {underbarRef} = useSideAnimeContext();
  const changeUnderbarSize = gsap.timeline()

  const btnClickHandler = (link:string,text:string) => {
    changeUnderbarSize
      .to(`.under_${text.replace(/\s/g, "")}`,{scaleY:0.1,duration:0.5,transformOrigin:"top"})
      .then(()=>{
        setLinkTo(link)
        closeSide();
      })
  }

  return (
    <>
      <div>
        <button className={`flex flex-col items-center border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnType.moveTo,btnType.text)}}>
          <p className="text-white">{btnType.text}</p>
          <div ref={underbarRef} className={`bg-white w-[100%] h-4 under_${btnType.text.replace(/\s/g, "")}`}></div>
        </button>
      </div>
    </>
  );
};

export const BtnWithCircle = ({btnWithCircleType}:BtnWithCircleType) => {
  const router = useRouter();

  const btnClickHandler = (newPage:string) => {
    router.push(`/${newPage}`)
  }

  return (
    <button className={`flex flex-col border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnWithCircleType.moveTo)}}>
      <div className="flex gap-2 items-center">
        <CircleSVG circleType={{radius:btnWithCircleType.radius ,type:btnWithCircleType.type, color:btnWithCircleType.color}}/>
        <p className="text-white">{btnWithCircleType.text}</p>
      </div>
      <div className="bg-white w-[100%] h-4"></div>
    </button>

  );
};




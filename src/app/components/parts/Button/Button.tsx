"use client"
import Style from "./Button.module.css"
import { CircleSVG } from "../svg/AllSvgs";
import { useHbgBtnContext } from "@/app/context/HbgContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLandingAnimeContext } from "@/app/context/LandingAnimation";
import { useHomeAnimeBtnContext } from "@/app/context/HomeAnime";
import { useTranslateContext } from "@/app/context/Translate";
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

export const MainPageBtn = ({btnType}:BtnType) => {
  const {switchAnimation,setLink} = useHomeAnimeBtnContext();
  const changeUnderbarSize = gsap.timeline()

  const btnClickHandler = (link:string,text:string) => {
    setLink(link)
    changeUnderbarSize
      .to(`.under_${text.replace(/\s/g, "")}`,{scaleY:0.1,duration:0.5,transformOrigin:"top"})
      .then(()=>{
        switchAnimation();
      })
  }

  return (
    <>
      <div>
        <button className={`flex flex-col items-center border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnType.moveTo,btnType.text)}}>
          <p className="text-white">{btnType.text}</p>
          <div className={`bg-white w-[100%] h-4 under_${btnType.text.replace(/\s/g, "")}`}></div>
        </button>
      </div>
    </>
  );
};

export const Btn = ({btnType}:BtnType) => {
  const {closeSide,setLinkTo} = useHbgBtnContext();
  const changeUnderbarSize = gsap.timeline()

  const btnClickHandler = (link:string,text:string) => {
    setLinkTo(link)
    changeUnderbarSize
      .to(`.under_${text.replace(/\s/g, "")}`,{scaleY:0.1,duration:0.5,transformOrigin:"top"})
      .then(()=>{
        closeSide();
      })
  }

  return (
    <>
      <div>
        <button className={`flex flex-col items-center border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnType.moveTo,btnType.text)}}>
          <p className="text-white">{btnType.text}</p>
          <div className={`bg-white w-[100%] h-4 under_${btnType.text.replace(/\s/g, "")}`}></div>
        </button>
      </div>
    </>
  );
};

export const BtnWithCircle = ({btnWithCircleType}:BtnWithCircleType) => {
  const {changeLandingUnderStatus} = useLandingAnimeContext();
  const changeUnderbarSize = gsap.timeline()
  const btnClickHandler = () => {
    changeUnderbarSize
      .to(`.${btnWithCircleType.type}`,{scaleY:0.1,duration:0.5,transformOrigin:"top"})
      .then(()=>{
        changeLandingUnderStatus();
      })
  }

  return (
    <button className={`flex flex-col border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler()}}>
      <div className="flex gap-2 items-center">
        <CircleSVG circleType={{radius:btnWithCircleType.radius ,type:btnWithCircleType.type, color:btnWithCircleType.color}}/>
        <p className="text-white">{btnWithCircleType.text}</p>
      </div>
      <div className={`bg-white w-[100%] h-4 ${btnWithCircleType.type}`}></div>
    </button>

  );
};

export const LanguageBtn = () => {
  const {data,changeLanguage} = useTranslateContext();
  const aboutData = data[0];
  const languageBtnHandler = () => {
    changeLanguage();
  }

  return (
    <>
      <div>
        <button className={`flex flex-col items-center m-auto pb-5 ${Style.buttonBorder}`} onClick={languageBtnHandler}>
          <p className="text-white">{aboutData.language}</p>
          <div className={`bg-white w-[100%] h-4`}></div>
        </button>
      </div>
    </>
  );
};





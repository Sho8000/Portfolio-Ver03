"use client"
import { useRouter } from "next/navigation";
import Style from "./Button.module.css"
import { CircleSVG } from "../svg/AllSvgs";

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
  const router = useRouter();

  const btnClickHandler = (newPage:string) => {
    router.push(`/${newPage}`)
  }

  return (
    <button className={`flex items-center gap-2 border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnType.moveTo)}}>
      <p className="text-white">{btnType.text}</p>
    </button>
  );
};

export const BtnWithCircle = ({btnWithCircleType}:BtnWithCircleType) => {
  const router = useRouter();

  const btnClickHandler = (newPage:string) => {
    router.push(`/${newPage}`)
  }

  return (
    <button className={`flex items-center gap-2 border-white ${Style.buttonBorder}`} onClick={()=>{btnClickHandler(btnWithCircleType.moveTo)}}>
      <CircleSVG circleType={{radius:btnWithCircleType.radius ,type:btnWithCircleType.type, color:btnWithCircleType.color}}/>
      <p className="text-white">{btnWithCircleType.text}</p>
    </button>

  );
};




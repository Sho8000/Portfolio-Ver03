import CircleSVG from "../svg/StrokeCircle";
import Style from "./Button.module.css"

interface BtnProps {
  text:string;
}

interface BtnType {
  btnType:BtnProps
}

interface BtnWithCircleProps{
  text:string;
  radius:number;
  type:"fill"|"stroke";
  color:string;
}

interface BtnWithCircleType {
  btnWithCircleType:BtnWithCircleProps
}

export const Btn = ({btnType}:BtnType) => {

  return (
    <button className={`flex items-center gap-2 border-white ${Style.buttonBorder}`}>
      <p className="text-white">{btnType.text}</p>
    </button>

  );
};

export const BtnWithCircle = ({btnWithCircleType}:BtnWithCircleType) => {

  return (
    <button className={`flex items-center gap-2 border-white ${Style.buttonBorder}`}>
      <CircleSVG circleType={{radius:btnWithCircleType.radius ,type:btnWithCircleType.type, color:btnWithCircleType.color}}/>
      <p className="text-white">{btnWithCircleType.text}</p>
    </button>

  );
};




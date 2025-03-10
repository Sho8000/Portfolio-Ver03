"use client"
import { useHbgBtnContext } from "@/app/(context)/HbgContext";

interface CircleProps {
  radius:number;
  type:"fill"|"stroke";
  color:string;
}

interface CircleType {
  circleType:CircleProps
}


export const CircleSVG = ({circleType}:CircleType) => {
  //circle of 1px stroke
  const circleSize = (circleType.radius * 2) + 2; 
  const radius = circleType.radius;
  let fill = "none"
  if(circleType.type==="fill"){
    fill = circleType.color
  }

  return (
    <div>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
      >
        <circle
          cx={circleSize/2}
          cy={circleSize/2}
          strokeWidth={"1px"}
          r={radius}
          fill={fill}
          stroke={circleType.color}
          transform={`rotate(-90 ${circleSize/2} ${circleSize/2})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const HbgMenu = () => {
  const {openSide} = useHbgBtnContext();

  const HbgClickHandler = () => {
    openSide();
  }

  return (
    <button onClick={HbgClickHandler}>
      <svg width="60" height="47">
        <rect x="10" y="10" rx="1" ry="1" width="40" height="2"
        style={{fill:"white",stroke:"white",strokeWidth:5}} />
        <rect x="10" y="22" rx="1" ry="1" width="40" height="2"
        style={{fill:"white",stroke:"white",strokeWidth:5}} />
        <rect x="10" y="34" rx="1" ry="1" width="40" height="2"
        style={{fill:"white",stroke:"white",strokeWidth:5}} />
      </svg>  
    </button> 
  )
}

export const CloseBtn = () => {
  return (
    <button>
      <svg width="50" height="50">
        <line x1="10" y1="10" x2="40" y2="40" stroke="white" strokeWidth="3px"/>
        <line x1="10" y1="40" x2="40" y2="10" stroke="white" strokeWidth="3px" />
      </svg>  
    </button>  
  )
}
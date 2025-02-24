"use client"
import { createContext, RefObject, useContext, useRef, useState } from "react";

type LandingAnimeState = {
  isLandingUnderbarDone:boolean;
  changeLandingUnderStatus:()=>void;
}

const LandingAnimeContext = createContext<LandingAnimeState | undefined>(undefined);

const LandingAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isLandingUnderbarDone, setIsLandingUnderbarDone] = useState(false);

  const changeLandingUnderStatus = () => {
    setIsLandingUnderbarDone(!isLandingUnderbarDone)
  } 

  const value = {isLandingUnderbarDone,changeLandingUnderStatus}

  return (
    <LandingAnimeContext.Provider value={value}>
      {children}
    </LandingAnimeContext.Provider>
  )
}

const useLandingAnimeContext = ():LandingAnimeState => {
  const context = useContext(LandingAnimeContext);
  if(!context){
    throw new Error("useCartContex must be used within a CounterContextProvider");
  }
  return context;
}


export {LandingAnimeContextProvider, useLandingAnimeContext}
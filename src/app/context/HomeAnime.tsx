"use client"
import { createContext, useContext, useState } from "react";

type HomeAnimeState = {
  animationSwitch:boolean;
  linkTo:string|null
  switchAnimation:()=>void;
  setLink:(link:string|null)=>void;
}

const HomeAnimeContext = createContext<HomeAnimeState | undefined>(undefined);

const HomeAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [animationSwitch,setAnimationSwitch] = useState(false)
  const [linkTo,setLinkTo] = useState<string|null>(null);

  const switchAnimation = () => {
    setAnimationSwitch(!animationSwitch)
  }

  const setLink = (link:string|null) => {
    setLinkTo(link)
  }


  const value = {animationSwitch,linkTo,switchAnimation,setLink}

  return (
    <HomeAnimeContext.Provider value={value}>
      {children}
    </HomeAnimeContext.Provider>
  )
}

const useHomeAnimeBtnContext = ():HomeAnimeState => {
  const context = useContext(HomeAnimeContext);
  if(!context){
    throw new Error("useCartContex must be used within a CounterContextProvider");
  }
  return context;
}

export {HomeAnimeContextProvider, useHomeAnimeBtnContext}
"use client"
import { createContext, useContext } from "react";
import { gsap } from "gsap";

type SideAnimeState = {
  sidebarAnimation:GSAPTimeline;
}

const SideAnimeContext = createContext<SideAnimeState | undefined>(undefined);

const SideAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const sidebarAnimation = gsap.timeline();


  const value = {sidebarAnimation}

  return (
    <SideAnimeContext.Provider value={value}>
      {children}
    </SideAnimeContext.Provider>
  )
}

const useSideAnimeContext = ():SideAnimeState => {
  const context = useContext(SideAnimeContext);
  if(!context){
    throw new Error("useCartContex must be used within a CounterContextProvider");
  }
  return context;
}


export {SideAnimeContextProvider, useSideAnimeContext}
"use client"
import { createContext, RefObject, useContext, useRef } from "react";
import { gsap } from "gsap";


type SideAnimeState = {
  sidebarRef:RefObject<HTMLDivElement|null>;
  sidebarAnimation:RefObject<GSAPTimeline>;
  sidebarItemAnimation:RefObject<GSAPTimeline>;
}

const SideAnimeContext = createContext<SideAnimeState | undefined>(undefined);

const SideAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const sidebarRef = useRef(null)
  const sidebarAnimation = useRef(gsap.timeline({paused:true}));
  const sidebarItemAnimation = useRef(gsap.timeline({paused:true}));


  const value = {sidebarRef,sidebarAnimation,sidebarItemAnimation}

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
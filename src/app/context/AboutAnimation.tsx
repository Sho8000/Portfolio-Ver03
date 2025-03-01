"use client"
import { createContext, useContext, useState } from "react";
import { gsap } from "gsap";

type AboutAnimeState = {
  isAboutClose:boolean
  aboutHeadAnimation:GSAPTimeline|null;
  aboutMainAnimation:GSAPTimeline|null;
  aboutProAnimation:GSAPTimeline|null;
  aboutWorkAnimation:GSAPTimeline|null;
  aboutClose:(status:boolean)=>void;
  moveTo:string|null;
  setLink:(link:string)=>void;
  setHeadAnime:(anime:GSAPTimeline)=>void
  setMainAnime:(anime:GSAPTimeline)=>void
  setProAnime:(anime:GSAPTimeline)=>void
  setWorkAnime:(anime:GSAPTimeline)=>void
}

const AboutAnimeContext = createContext<AboutAnimeState | undefined>(undefined);

const AboutAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [aboutHeadAnimation,setAboutHeadAnimation] = useState<GSAPTimeline|null>(null);
  const [aboutMainAnimation,setAboutMainAnimation] = useState<GSAPTimeline|null>(null);
  const [aboutProAnimation,setAboutProAnimation] = useState<GSAPTimeline|null>(null);
  const [aboutWorkAnimation,setAboutWorkAnimation] = useState<GSAPTimeline|null>(null);


//  const aboutAnimation = gsap.timeline();
  const [isAboutClose, setIsAboutClose]=useState(false)
  const [moveTo,setMoveTo] = useState<string|null>(null);

  const aboutClose = (status:boolean) => {
    setIsAboutClose(status)
  }

  const setLink = (link:string) => {
    setMoveTo(link)
  }

  const setHeadAnime = (anime:GSAPTimeline) => {
    setAboutHeadAnimation(anime)
  }
  const setMainAnime = (anime:GSAPTimeline) => {
    setAboutMainAnimation(anime)
  }
  const setProAnime = (anime:GSAPTimeline) => {
    setAboutProAnimation(anime)
  }
  const setWorkAnime = (anime:GSAPTimeline) => {
    setAboutWorkAnimation(anime)
  }

  const value = {isAboutClose,moveTo,aboutHeadAnimation,aboutMainAnimation,aboutProAnimation,aboutWorkAnimation,aboutClose,setLink,setHeadAnime,setMainAnime,setProAnime,setWorkAnime}

  return (
    <AboutAnimeContext.Provider value={value}>
      {children}
    </AboutAnimeContext.Provider>
  )
}

const useAboutAnimeContext = ():AboutAnimeState => {
  const context = useContext(AboutAnimeContext);
  if(!context){
    throw new Error("useAboutContex must be used within a CounterContextProvider");
  }
  return context;
}


export {AboutAnimeContextProvider, useAboutAnimeContext}
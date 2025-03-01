"use client"
import { createContext, useContext, useState } from "react";

type HeaderAnimeState = {
  isHeaderClose:boolean
  headerState:(status:boolean)=>void;
}

const HeaderAnimeContext = createContext<HeaderAnimeState | undefined>(undefined);

const HeaderAnimeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isHeaderClose, setIsHeaderClose]=useState(false)

  const headerState = (status:boolean) => {
    setIsHeaderClose(status)
  }

  const value = {isHeaderClose,headerState,}

  return (
    <HeaderAnimeContext.Provider value={value}>
      {children}
    </HeaderAnimeContext.Provider>
  )
}

const useHeaderAnimeContext = ():HeaderAnimeState => {
  const context = useContext(HeaderAnimeContext);
  if(!context){
    throw new Error("useAboutContex must be used within a CounterContextProvider");
  }
  return context;
}


export {HeaderAnimeContextProvider, useHeaderAnimeContext}
"use client"
import { createContext, useContext, useState } from "react";

type HbgState = {
  hbgState:boolean;
  openSide:()=>void;
  closeSide:()=>void;
}

const HbgBtnContext = createContext<HbgState | undefined>(undefined);

const HbgBtnContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [hbgState,setHbgState] = useState(false)
  const [isOpen,setIsOpen] = useState(false)

  const openSide = () => {
    setHbgState(true)
  }

  const closeSide = () => {
    setHbgState(false)
  }

  const value = {hbgState,openSide,closeSide}

  return (
    <HbgBtnContext.Provider value={value}>
      {children}
    </HbgBtnContext.Provider>
  )
}

const useHbgBtnContext = ():HbgState => {
  const context = useContext(HbgBtnContext);
  if(!context){
    throw new Error("useCartContex must be used within a CounterContextProvider");
  }
  return context;
}


export {HbgBtnContextProvider, useHbgBtnContext}
"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type HbgState = {
  hbgState:boolean;
  linkTo:string|null;
  openSide:()=>void;
  closeSide:()=>void;
  setLinkTo:Dispatch<SetStateAction<string|null>>;
}

const HbgBtnContext = createContext<HbgState | undefined>(undefined);

const HbgBtnContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [hbgState,setHbgState] = useState(false)
  const [linkTo,setLinkTo] = useState<string|null>(null)

  const openSide = () => {
    setHbgState(true)
  }

  const closeSide = () => {
    setHbgState(false)
  }

  const value = {hbgState,linkTo,openSide,closeSide,setLinkTo}

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
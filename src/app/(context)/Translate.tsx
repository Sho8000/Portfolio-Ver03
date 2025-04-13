"use client"
import { createContext, useContext, useState } from "react";
import { MainDBEng, MainDBJap } from "../lib/db";
import { StaticImageData } from "next/image";

interface Project {
  projectName: string;
  imgUrl: StaticImageData;
  type: string;
  explain: string;
  url: string;
  githubUrl?: string;
  skillImg: StaticImageData[];
  skillName: string[];
  createdDate: string;
}

interface WorkExperience {
  companyName: string;
  companyImg: StaticImageData;
  contents: string;
  dateStarted: string;
  dateEnded: string;
}

interface FooterInfo {
  iconName: string;
  img: StaticImageData;
  url: string;
}

interface MainDB {
  language: string;
  myImg: StaticImageData;
  mainComment: string;
  project: Project[];
  workExperience: WorkExperience[];
  footerInfo: FooterInfo[];
}

type TranslateState = {
  data:MainDB[];
  changeLanguage:()=>void;
}

const TranslateContext = createContext<TranslateState | undefined>(undefined);

const TranslateContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [data,setData] = useState(MainDBEng)

  const changeLanguage = () => {
    if(data === MainDBEng){
      setData(MainDBJap)
    } else {
      setData(MainDBEng)
    }
  }

  const value = {data,changeLanguage}

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  )
}

const useTranslateContext = ():TranslateState => {
  const context = useContext(TranslateContext);
  if(!context){
    throw new Error("useTranslateContex must be used within a CounterContextProvider");
  }
  return context;
}


export {TranslateContextProvider, useTranslateContext}
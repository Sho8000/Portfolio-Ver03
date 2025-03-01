"use client"
import { useState } from "react";
import { Reorder } from "motion/react";
import Image from "next/image";
import Style from "./project.module.css"
import { MainDBEng } from "../lib/db";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useHeaderAnimeContext } from "../context/HeaderAnimation";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Project() {
  const [projectList,setProjectList] = useState(MainDBEng[0].project)
  const {isHeaderClose} = useHeaderAnimeContext();
  const projectAnime = gsap.timeline();
  useEffect(() => {
    projectAnime
      .to(".projectAnime", { scaleY: 1, duration: 0.5, stagger:0.5},0.5)

    return () => {
      projectAnime.kill();
    };
  }, []);

  useEffect(()=>{
    if(isHeaderClose){
      projectAnime
      .to(".projectAnime", { scaleY: 0, duration: 0.5 },0.5)
    }
  },[isHeaderClose])


  const projectLinkHandler = (url:string) => {
    window.location.href = url
  }

  return (
    <>
      <section className="w-[100vw] min-h-[100vh] overflow-x-hidden projectAnime scale-y-0">
        <div className="h-[80px]"></div>
        <h2 className="text-white text-3xl font-bold text-center p-3">My Project (Click to See)</h2>
        <div className="w-[600px] m-auto">
          <Reorder.Group values={projectList} axis='y' onReorder={setProjectList} className='draggable-container'>
            {projectList.map((item,index)=>(
              index===0?(
                  <Reorder.Item 
                    key={item.projectName}
                    value={item}
                    whileHover={{scale:1.05}}
  /*                   whileDrag={{backgroundColor:'#f0a'}} */
                    className='draggable-item'
                  >
                    <div className="flex justify-center items-center w-[100%] h-[300px] bg-white m-auto overflow-hidden border-2 border-white rounded-lg relative" onClick={()=>{projectLinkHandler(item.url)}}>
                      <Image
                        src={item.imgUrl}
                        alt={item.projectName}
                        width={500}
                        height={300}
                        style={{minWidth:"100%"}}
                      />
  {/*                     <span className={`absolute top-0 left-0 pt-3 pl-3 text-white text-2xl font-bold ${Style.projectTitle}`}>{item.projectName}</span> */}
                      <span className={`absolute top-0 left-[50%] translate-x-[-50%] pt-5 pl-3 text-yellow-300 text-3xl font-bold ${Style.projectTitle}`}>{item.type}</span>                    
                    </div>
                  </Reorder.Item>
              ):(
              <Reorder.Item 
                key={item.projectName}
                value={item}
                whileHover={{scale:1.1}}
  /*               whileDrag={{backgroundColor:'#f0a'}} */
                className='draggable-item'
              >
                <div className="flex">
                  <div className="flex justify-around w-[60%] h-auto bg-white m-auto mt-3 rounded-md">
                    <p className="text-center">↑ Drag</p>
                    <span className="text-base font-bold"> {item.projectName} </span>
                    <p>Drag ↑</p>
                  </div>
                </div>
              </Reorder.Item>
              )
            ))}
          </Reorder.Group>
        </div>
      </section>
    </>
  );
}

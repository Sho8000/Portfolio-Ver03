"use client"
import { useState } from "react";
import { Reorder } from "motion/react";
import MovieImg from "@/../public/MovieSuggestingApp.png"
import PokemonImg from "@/../public/PokemonImgPC.png"
import CommingSoonImg from "@/../public/commingSoon.png"
import Image from "next/image";
import Style from "./project.module.css"

export default function Project() {
  const initialList = [
    "Project1",
    "Project2",
    "Project3",
    "Project4",
  ];

  const initialProjectList = [
    {
      projectName:"MovieSuggestingApp",
      imgUrl:MovieImg,
    },
    {
      projectName:"Pokemon Valorant Charactor",
      imgUrl:PokemonImg,
    },
    {
      projectName:"Comming Soon",
      imgUrl:CommingSoonImg,
    },
  ]

  const [listItems,setListItems] = useState(initialList)
  const [projectList,setProjectList] = useState(initialProjectList)

  return (
    <>
      <section className="w-[100vw] min-h-[100vh] overflow-x-hidden">
        <div className="h-[80px]"></div>
        <h2 className="text-white text-3xl font-bold text-center p-3">My Project (Click to Detail)</h2>
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
                  <div className="flex justify-center items-center w-[70%] h-[400px] bg-white m-auto overflow-hidden border-2 border-white rounded-lg relative">
                    <Image
                      src={item.imgUrl}
                      alt={item.projectName}
                      width={500}
                      height={300}
                      style={{minWidth:"100%"}}
                    />
                    <span className={`absolute top-0 left-0 pt-3 pl-3 text-white text-2xl font-bold ${Style.projectTitle}`}>{item.projectName}</span>
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
      </section>
    </>
  );
}

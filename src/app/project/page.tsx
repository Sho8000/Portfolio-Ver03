"use client"
import { useState } from "react";
import { Reorder } from "motion/react"
import { div } from "motion/react-client";
import Footer from "../components/pages/Footer/Footer";

export default function Project() {
  const initialList = [
    "Project1",
    "Project2",
    "Project3",
    "Project4",
  ];
  const [listItems,setListItems] = useState(initialList)

  return (
    <>
      <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
        <div className="h-[80px]"></div>
        <h2 className="text-white text-3xl font-bold text-center p-3">My Project</h2>
        <Reorder.Group values={listItems} axis='y' onReorder={setListItems} className='draggable-container'>
          {listItems.map((item,index)=>(
            index===0?(
                <Reorder.Item 
                  key={item}
                  value={item}
                  whileHover={{scale:1.1}}
                  whileDrag={{backgroundColor:'#f0a'}}
                  className='draggable-item'
                >
                  <div className="w-[70%] h-[300px] bg-white m-auto">
                    <span>{item}</span>
                  </div>
                </Reorder.Item>
            ):(
            <Reorder.Item 
              key={item}
              value={item}
              whileHover={{scale:1.1}}
              whileDrag={{backgroundColor:'#f0a'}}
              className='draggable-item'
            >
              <div className="flex">
                <div className="w-[60%] h-[20px] bg-white m-auto mt-3 rounded-md">
                  <p className="text-center">↑ Drag<span> {item} </span>Drag ↑</p>
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

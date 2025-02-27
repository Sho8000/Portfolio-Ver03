"use client"
import { MainDBEng } from "@/app/lib/db";
import Image from "next/image";
import { useState } from "react";

export default function AboutProject() {
  const [aboutData,setAboutData] = useState(MainDBEng[0])

  const goToProjectPage = () => {
//    window.location.href = `/project`
//    add hover action
  }

  return (
    <section id="project" className="w-[100vw] min-h-[100vh] overflow-x-hidden">
      <div className="mb-4 bg-blue-900/60 border-t-2 border-l-2 border-r-2 border-gray-200/60">
        {aboutData.project.map((item,index)=>{
          return <div key={index}>
            <div className="flex items-strech border-b-2 border-gray-200/60">
              <div className="basis-1/2 border-r-2 border-gray-200/60">
                <Image
                  className="m-auto p-4"
                  src={item.imgUrl}
                  alt={item.projectName}
                  width={400}
                  height={250}
                  onClick={goToProjectPage}
                />
              </div>
              <div className="h-auto basis-1/2">
                <div className="flex justify-center">
                {item.skillImg.map((skill,index)=>
                  <Image
                    key={index}
                    src={skill}
                    alt="skillPic"
                    width={90}
                    height={90}
                  />)
                }
                </div>
                <p className="w-[80%] m-auto text-white">{item.explain}</p>
                <div className="w-[80%] m-auto flex justify-between items-center mt-3 grow">
                  <p className="text-white text-center">GitHub : <a href={item.githubUrl}><span className="font-bold underline">Here</span></a></p>
                  <p className="text-white">date : {item.createdDate}</p>
                </div>
              </div>
            </div>

          </div>
        })}
      </div>
    </section>
);
}

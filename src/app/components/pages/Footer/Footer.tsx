"use client"
import { MainDBEng } from "@/app/lib/db";
import Image from "next/image";

/* Contact me without props */
export default function Footer() {

  const linkToContactHandler = (url:string) => {
    window.location.href = url
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <div className={`justify-center mt-2 text-2xl`}>
          <p className="text-2xl text-white font-bold underline">Contact Me</p>
        </div>

        <div className="min-w-max flex gap-2 mt-3">
        {MainDBEng[0].footerInfo.map((item,index)=>
          <Image
          key={index}
          src={item.img}
          alt={item.iconName}
          height={40}
          width={40}
          priority
          style={{border:"2px solid white", borderRadius:"5px"}}
          onClick={()=>{linkToContactHandler(item.url)}}
        />
        )}
        </div>
      </div>
    </>
  );
}

/*  Contact me with Prop

import { Btn } from "../../parts/Button/Button";
import { useEffect, useState } from "react";

interface FooterProps {
  contact: boolean;
}

export default function Footer({contact}:FooterProps) {
  const [contactOff,setContactOff] = useState("flex");

  useEffect(()=>{
    if(!contact){
      setContactOff("hidden")
    } else {
      setContactOff("flex")
    }  
  },[contact])

  return (
    <>
      <div className="flex flex-col items-center justify-center m-5">
        <div className="min-w-max flex gap-2">
          <Image
            src={InstagramIcon}
            alt="icon"
            height={40}
            width={40}
            priority
            style={{border:"2px solid white", borderRadius:"5px"}}
          />
          <Image
            src={LinkedInIcon}
            alt="icon"
            height={40}
            width={40}
            priority
            style={{border:"2px solid white", borderRadius:"5px"}}
          />
          <Image
            src={GithubIcon}
            alt="icon"
            height={40}
            width={40}
            priority
            style={{border:"2px solid white", borderRadius:"5px"}}
          />
          <Image
            src={EmailIcon}
            alt="icon"
            height={40}
            width={40}
            priority
            style={{border:"2px solid white", borderRadius:"5px"}}
          />
        </div>
        <div className={`justify-center mt-2 text-2xl ${contactOff}`}>
          <Btn btnType={{text:"Contact Me", moveTo:"contact"}}/>
        </div>
      </div>
    </>
  );
}
 */
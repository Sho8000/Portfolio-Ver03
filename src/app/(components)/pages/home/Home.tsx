"use client"
import { MainPageBtn } from "../../parts/Button/Button";
import Image from "next/image";
import MyPicture from "@/../public/TeachingSqare.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import { useHomeAnimeBtnContext } from "@/app/(context)/HomeAnime";
import Style from "./Home.module.css"
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function HomeMain() {
  const {animationSwitch,linkTo} = useHomeAnimeBtnContext();
  const homeAnimation = gsap.timeline();

  useEffect(() => {
    homeAnimation
      .to(".homeAnimation",{scaleY:1,duration:0.5,stagger:0.3})
    return () => {
      homeAnimation.kill();
    };
  }, []);

  useEffect(()=>{
    if(linkTo){
      homeAnimation
        .to(".homeAnimation",{scaleY:0,duration:0.5,stagger:-0.5})
        .then(()=>{
          window.location.href = `/${linkTo}`;
        })
    }
    return () => {
      homeAnimation.kill();
    }; 
  },[animationSwitch])

      
  return (
    <>
      <section className={`w-[100%] min-h-[80vh] overflow-x-hidden`}>
        <div className={`w-[100%] min-h-[400px] h-[auto] relative ${Style.homeContainerResponsive}`}>
          <div>
            <h2 className="text-white text-3xl font-bold pt-4 pl-4 homeAnimation scale-y-0">Sho Yoshimura</h2>
          </div>
          <div className="mt-4 ml-4">
            <div className="homeAnimation scale-y-0">
              <MainPageBtn btnType={{text:"About Me", moveTo:"about"}}/>
            </div>
            <div className="homeAnimation scale-y-0">
              <MainPageBtn btnType={{text:"Work Experience", moveTo:"about/#work"}}/>
            </div>
            <div className="homeAnimation scale-y-0">
              <MainPageBtn btnType={{text:"Projects", moveTo:"about/#project"}}/>
            </div>
            <div className="homeAnimation scale-y-0">
              <MainPageBtn btnType={{text:"Project Links", moveTo:"project"}}/>
            </div>
          </div>
          <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] homeAnimation scale-y-0 mt-10 ${Style.homeResponsive}`}>
            <Image
              src={MyPicture}
              alt="MyPicture"
              height={250}
              width={250}
              priority
              style={{minWidth:"250px", border:"4px solid white", borderRadius:"50%", margin:"auto"}}
            />
          </div>
        </div>
        <div className="homeAnimation scale-y-0">
          <Footer/>
        </div>
      </section>
    </>
  );
}

"use client"
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageBtn } from "../../parts/Button/Button";
import { useHeaderAnimeContext } from "@/app/(context)/HeaderAnimation";
import { useTranslateContext } from "@/app/(context)/Translate";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AboutMain() {
  const {data} = useTranslateContext();
  const aboutData = data[0]
/*   const [aboutData,setAboutData] = useState(MainDBEng[0]) */
  const {isHeaderClose} = useHeaderAnimeContext()
  const aboutMainAnime = gsap.timeline();

  useEffect(() => {
    aboutMainAnime
      .to(".aboutMainAnime", { scaleY: 1, duration: 0.5, stagger:0.3},0.3)

    return () => {
      aboutMainAnime.kill();
    };
  }, []);

  useEffect(()=>{
    if(isHeaderClose){
      aboutMainAnime
      .to(".aboutMainAnime", { scaleY: 0, duration: 0.5 },0.3)
    }
  },[isHeaderClose])

  return (
    <section>
      <div className="h-[80px]"></div>
      <div className="mt-4 aboutMainAnime scale-y-0">
        <Image
          className="m-auto rounded-[50%] border-white border-2"
          src={aboutData.myImg}
          alt="myPic"
          width={250}
          height={250}
        />
      </div>
      <div className="w-[80%] m-auto mt-4 mb-4 bg-blue-950/40 pt-6 pb-6 pr-4 pl-4 rounded-lg aboutMainAnime scale-y-0">
        {aboutData.mainComment.split('\n').map((item, index)=>{
          return <p key={index} className="text-white">{item} <br/></p>
        })}
      </div>
      <div className="aboutMainAnime scale-y-0">
        <LanguageBtn/>
      </div>
    </section>
  );
}

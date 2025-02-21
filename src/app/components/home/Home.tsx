import { Btn } from "../Button/Button";
import EmailIcon from "../../../../public/Email.png"
import GithubIcon from "../../../../public/github.png"
import InstagramIcon from "../../../../public/instagramLogo.png"
import LinkedInIcon from "../../../../public/LinkedIn.png"
import Image from "next/image";
import MyPicture from "../../../../public/TeachingSqare.png"

export default function HomeMain() {
  return (
    <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2 border-red-600">
      <div className="w-[100vw] min-h-[600px] h-[100vh] relative">
        <div className="mt-4 ml-4">
          <h2 className="text-white text-4xl font-bold">Sho Yoshimura</h2>
        </div>
        <div className="mt-4 ml-4">
          <Btn btnType={{text:"About Me", moveTo:""}}/>
          <Btn btnType={{text:"Skills", moveTo:""}}/>
          <Btn btnType={{text:"WorkExperience", moveTo:""}}/>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={MyPicture}
            alt="MyPicture"
            height={250}
            width={250}
            style={{border:"4px solid white", borderRadius:"50%"}}
          />
        </div>
        <div className="absolute bottom-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex gap-2">
            <Image
              src={InstagramIcon}
              alt="icon"
              height={40}
              width={40}
              style={{border:"2px solid white", borderRadius:"5px"}}
            />
            <Image
              src={LinkedInIcon}
              alt="icon"
              height={40}
              width={40}
              style={{border:"2px solid white", borderRadius:"5px"}}
            />
            <Image
              src={GithubIcon}
              alt="icon"
              height={40}
              width={40}
              style={{border:"2px solid white", borderRadius:"5px"}}
            />
            <Image
              src={EmailIcon}
              alt="icon"
              height={40}
              width={40}
              style={{border:"2px solid white", borderRadius:"5px"}}
            />
          </div>
          <div className="flex justify-center mt-2 text-2xl">
            <Btn btnType={{text:"Contact Me", moveTo:""}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Btn } from "../Button/Button";
import Image from "next/image";
import MyPicture from "../../../../public/TeachingSqare.png"
import Footer from "../Footer/Footer";

export default function HomeMain() {
  return (
    <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
      <div className="w-[100vw] min-h-[600px] h-[100vh] relative">
        <div className="mt-4 ml-4">
          <h2 className="text-white text-4xl font-bold">Sho Yoshimura</h2>
        </div>
        <div className="mt-4 ml-4">
          <Btn btnType={{text:"About Me", moveTo:"about"}}/>
          <Btn btnType={{text:"Skills", moveTo:""}}/>
          <Btn btnType={{text:"WorkExperience", moveTo:""}}/>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={MyPicture}
            alt="MyPicture"
            height={250}
            width={250}
            priority
            style={{border:"4px solid white", borderRadius:"50%"}}
          />
        </div>
        <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Footer withContact={{contact:true}}/>
        </div>
      </div>
    </section>
  );
}

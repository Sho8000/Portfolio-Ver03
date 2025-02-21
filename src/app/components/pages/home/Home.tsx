import { Btn } from "../../parts/Button/Button";
import Image from "next/image";
import MyPicture from "@/../public/TeachingSqare.png"
import Footer from "../Footer/Footer";

export default function HomeMain() {
  return (
    <section className="w-[100vw] min-h-[80vh] overflow-x-hidden">
      <div className="w-[100vw] min-h-[400px] h-[80vh] relative">
        <div>
          <h2 className="text-white text-3xl font-bold pt-4 pl-4">Sho Yoshimura</h2>
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
      </div>
    </section>
  );
}

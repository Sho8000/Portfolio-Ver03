import CircleProgressBar from "./CircleProgressBar";
import Style from "./Landing.module.css"
import CircleSVG from "./svg/StrokeCircle";

export default function LandingPage() {

  return (
    <section className={`w-[100vw] h-[100vh] overflow-x-hidden ${Style.landingSection} relative`}>
      <div className="relative w-[450px] h-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <CircleProgressBar/>
        </div>
        <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-3xl font-bold  text-white">Sho Yoshimura</h1>
        </div>
        <div className="absolute w-[400px] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div>
            <p className="text-white text-xl text-center">Turn on your sound to enjoy!</p>
          </div>
          <div className="flex justify-center gap-4">
            <button className={`flex items-center gap-2 ${Style.buttonBorder}`}>
              <CircleSVG circleType={{radius:8 ,type:"fill"}}/>
              <p className="text-white">Sound ON</p>
            </button>
            <button className={`flex items-center gap-2 border-white ${Style.buttonBorder}`}>
              <CircleSVG circleType={{radius:8 ,type:"stroke"}}/>
              <p className="text-white">Sound OFF</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

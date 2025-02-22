import CircleProgressBar from "../../parts/CircleProgressBar/CircleProgressBar";
import { BtnWithCircle } from "../../parts/Button/Button";

export default function LandingPage() {

  return (
    <section className={`w-[100vw] h-[100vh] overflow-hidden relative`}>
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
            
            <BtnWithCircle btnWithCircleType={{text:"Preparing" ,radius:8 ,type:"fill", color:"white", moveTo:'home'}} />
            <BtnWithCircle btnWithCircleType={{text:"Sound OFF" ,radius:8 ,type:"stroke", color:"white", moveTo:'home'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

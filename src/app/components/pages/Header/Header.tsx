import { HbgMenu } from "../../parts/svg/AllSvgs";
import Style from "./Header.module.css"

export default function Header() {

  return (
    <>
      <nav className={`fixed w-[100%] h-[80px] border-b-2 border-gray-400 p-4 z-10 ${Style.headBG}`}>
        <div className="flex justify-between items-center">
          <button>
            <h2 className="text-white text-4xl font-bold">Sho Yoshimura</h2>
          </button>
          <HbgMenu/>
        </div>
      </nav>
    </>
  );
}

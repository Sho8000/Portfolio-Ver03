import { HbgMenu } from "../../parts/svg/AllSvgs";

export default function Header() {

  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="">
          <h2 className="text-white text-4xl font-bold">Sho Yoshimura</h2>
        </div>
        <HbgMenu/>
      </div>
    </>
  );
}

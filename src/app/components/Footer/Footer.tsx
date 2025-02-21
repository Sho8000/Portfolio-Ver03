import Image from "next/image";
import EmailIcon from "../../../../public/Email.png"
import GithubIcon from "../../../../public/github.png"
import InstagramIcon from "../../../../public/instagramLogo.png"
import LinkedInIcon from "../../../../public/LinkedIn.png"
import { Btn } from "../Button/Button";

interface FooterProps {
  contact: boolean;
}

interface FooterType {
  withContact:FooterProps
}

export default function Footer({withContact}:FooterType) {
  let contactOff = ""
  if(!withContact){
    contactOff = "hidden"
  }

  return (
    <>
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
      <div className={`flex justify-center mt-2 text-2xl ${contactOff}`}>
        <Btn btnType={{text:"Contact Me", moveTo:"contact"}}/>
      </div>
    </>
  );
}

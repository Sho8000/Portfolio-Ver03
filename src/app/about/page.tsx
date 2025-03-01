import AboutMain from "../components/pages/About/AboutMain";
import AboutProject from "../components/pages/About/AboutProject";
import AboutWorkE from "../components/pages/About/AboutWorkE";
import { LanguageBtn } from "../components/parts/Button/Button";
import SectionDivider from "../components/parts/SectionDivider/SectionDivider";

export default function About() {
  
  return (
    <>
      <main>
        <AboutMain/>
{/*         <div className="text-white text-center">Add language BTN</div> */}
        <LanguageBtn/>
        <SectionDivider sectionName="Project"/>
        <AboutProject/>
        <SectionDivider sectionName="Work Experience"/>
        <AboutWorkE/>
      </main>
    </>
  );
}

import AboutMain from "../(components)/pages/About/AboutMain";
import AboutProject from "../(components)/pages/About/AboutProject";
import AboutWorkE from "../(components)/pages/About/AboutWorkE";
import SectionDivider from "../(components)/parts/SectionDivider/SectionDivider";

export default function About() {
  
  return (
    <>
      <main>
        <AboutMain/>
        <SectionDivider sectionName="Project" index={1}/>
        <AboutProject/>
        <SectionDivider sectionName="Work Experience" index={2}/>
        <AboutWorkE/>
      </main>
    </>
  );
}

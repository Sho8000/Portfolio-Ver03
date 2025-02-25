import AboutMain from "../components/pages/About/AboutMain";
import AboutProject from "../components/pages/About/AboutProject";
import AboutWorkE from "../components/pages/About/AboutWorkE";
import Footer from "../components/pages/Footer/Footer";
import Header from "../components/pages/Header/Header";
import Sidebar from "../components/pages/Sidebar/Sidebar";
import SectionDivider from "../components/parts/SectionDivider/SectionDivider";
import { HbgBtnContextProvider } from "../context/HbgContext";

export default function About() {
  return (
    <>
      <main>
        <AboutMain/>
        <div className="text-white text-center">Add language BTN</div>
        <SectionDivider sectionName="Project"/>
        <AboutProject/>
        <SectionDivider sectionName="Work Experience"/>
        <AboutWorkE/>
      </main>
    </>
  );
}

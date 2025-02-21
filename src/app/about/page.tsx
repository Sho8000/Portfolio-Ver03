import Footer from "../components/pages/Footer/Footer";
import Header from "../components/pages/Header/Header";
import Sidebar from "../components/pages/Sidebar/Sidebar";
import { HbgBtnContextProvider } from "../context/HbgContext";

export default function About() {
  return (
    <>
      <HbgBtnContextProvider>
        <Header/>
        <Sidebar/>
        <main>
          <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
          
            This is About
            About Main
            Project
            WorkExperience
            
          </section>
          <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
          </section>
          <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
          </section>
        </main>
      </HbgBtnContextProvider>
      <Footer contact={true}/>
    </>
  );
}

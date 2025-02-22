import Footer from "../components/pages/Footer/Footer";
import Header from "../components/pages/Header/Header";
import HomeMain from "../components/pages/home/Home";
import Sidebar from "../components/pages/Sidebar/Sidebar";
import { HbgBtnContextProvider } from "../context/HbgContext";

export default function Home() {
  return (
    <>
      <HomeMain/>
      <Footer/>
    </>
  );
}

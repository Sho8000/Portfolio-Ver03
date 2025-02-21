
import Footer from "../components/pages/Footer/Footer";
import Sidebar from "../components/pages/Sidebar/Sidebar";

export default function Contact() {
  return (
    <section className="w-[100vw] min-h-[100vh] overflow-x-hidden border-2">
      <Sidebar/>
      This is Contact
      <Footer contact={false}/>
    </section>
  );
}

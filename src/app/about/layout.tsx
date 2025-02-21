import Footer from "../components/pages/Footer/Footer";
import Header from "../components/pages/Header/Header";
import Sidebar from "../components/pages/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <Sidebar/>
      {children}
      <Footer contact={true}/>
    </>
  );
}

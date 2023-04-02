import React from "react";
import NavBar from "./components/navbar/NavBar";
import { SelectedPage } from "./share/types";
import Home from "./components/home/Home";
import Benefits from "./components/benefits/Benefits";
import OurClasses from "./components/ourClasses/OurClasses";
import ContactUs from "./components/contuctUs/ContactUS";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOffSet, setIsTopOffSet] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOffSet(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOffSet(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-20">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOffSet={isTopOffSet}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;

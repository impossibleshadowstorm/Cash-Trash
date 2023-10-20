import Header from "./component/header";
import Hero from "./component/hero";
import AboutUs from "./component/about-us";
import Footer from "./component/footer";
import BackToTopBtn from "./component/back-to-top-btn";
import Cta from "./component/cta";
import GetStarted from "./component/get-started";
import Services from "./component/services";
import TrustedPartner from "./component/trusted-partner";
import LocateUs from "./component/locate-us";
import Contact from "./component/contact";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
      <GetStarted />
      <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
      <Services />
      <TrustedPartner />
        <LocateUs />
        <Contact/>
      <AboutUs />
      <Cta />
      <Footer />
      <BackToTopBtn />
      {/* <div className="h-[40000px] w-full"></div> */}
    </main>
  );
}

import Header from "./component/header";
import Hero from "./component/hero";
import AboutUs from "./component/about-us";
import Footer from "./component/footer";
import BackToTopBtn from "./component/back-to-top-btn";
import Cta from "./component/cta";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Cta />
      <Footer />
      <BackToTopBtn />
      {/* <div className="h-[40000px] w-full"></div> */}
    </main>
  );
}

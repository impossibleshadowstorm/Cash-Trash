"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/search";
import SearchMobile from "./search-mobile";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${ nav ? "bg-[#fff]" :
        header ? "bg-[#38685B] shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className={`xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ${nav ? "" : "h-[70px]"}`}>
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={nav ? "/icons/primary-logo.svg" : "/icons/logo.svg"} width={194} height={64} alt="Logo" />
          </Link>
          {/* Nav OPen Menu */}
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl text-white" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className={`cursor-pointer ${nav ? "" : "text-white hover:text-[#F5D856]"}`}
            to="home"
            activeClass={`${nav ? "active" : "desktop-active"}`}
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className={`cursor-pointer ${nav ? "" : "text-white hover:text-[#F5D856]"}`}
            to="services"
            activeClass={`${nav ? "active" : "desktop-active"}`}
            smooth={desktopMode}
            spy={true}
          >
            Services
          </Link>
          <Link
            className={`cursor-pointer ${nav ? "" : "text-white hover:text-[#F5D856]"}`}
            to="about-us"
            activeClass={`${nav ? "active" : "active"}`}
            smooth={desktopMode}
            spy={true}
          >
            About Us
          </Link>
          <Link
            className={`cursor-pointer ${nav ? "" : "text-white hover:text-[#F5D856]"}`}
            to="scrap-rates"
            activeClass={`${nav ? "active" : "desktop-active"}`}
            smooth={desktopMode}
            spy={true}
          >
            Scrap Rates
          </Link>
          <Link
            className={`cursor-pointer ${nav ? "" : "text-white hover:text-[#F5D856]"}`}
            to="careers"
            activeClass={`${nav ? "active" : "active"}`}
            smooth={desktopMode}
            spy={true}
          >
            Careers
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass={`${nav ? "active" : "desktop-active"}`}
            smooth={desktopMode}
            spy={true}
          >
            Sell Scrapes
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}

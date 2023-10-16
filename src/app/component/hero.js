"use client";
import Image from "next/image";
import Search from "./search";
import { SearchContext } from "../context/search";
import { useContext } from "react";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#38685B]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1 text-white">
              Trash for Cash
              <br />
              Make a <span className="text-[#F5D856]">Splash</span>
            </h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 md-6 xl:mb-10 text-white">
              Trading your waste has never been simpler. Turn your recyclables
              into cash effortlessly while contributing to a greener planet.
            </p>
            {/* Btn */}
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[black] group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-[white]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Read About Us
              </span>
            </a>
          </div>
          <div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px] :right-[120px] xl:top-[100px]">
            <Image
              src={"/images/delivery-van.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
      <div>
        {searchActive ? (
          <div className="fixed top-[90px] z-10 w-full max-w-[1920px] z-50">
            <Search />
          </div>
        ) : (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <Search />
          </div>
        )}
      </div>
    </section>
  );
}

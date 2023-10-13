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
            <div className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image src={"next.svg"} alt="" width={132} height={36} />
              </button>
              <button className="btn-cta">
                <Image src={"next.svg"} alt="" width={132} height={36} />
              </button>
            </div>
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
          <div className="fixed top-[90px] z-10 w-full max-w-[1920px]">
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

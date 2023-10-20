"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";

const TrustedPartner = () => {
  return (
    <section className="relative h-[90vh]">
      <div className={"sm:p-5 xs:p-3 px-2 h-[90vh] py-5 relative bg-black"}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] h-full justify-center items-center w-full mx-auto flex xl:flex-row lg:flex-row flex-col gap-8`}
        >
          {/* First Div */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="flex-1 flex flex-row xs:max-sm:flex-col xs:max-sm:px-0 justify-evenly items-center mx-0 px-0 z-20 bg-[transparent]"
          >
            <div class="grid grid-cols-4 gap-3 w-full">
              <div class="row-span-1 bg-[transparent] rounded-md h-20"></div>
              <div class="row-span-2 bg-[#fff] rounded-md h-40 flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-9/12 items-end overflow-hidden rounded-lg bg-[white]  md:col-span-2"
                >
                  <Image
                    src="/images/reliance-industries-logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-1/2 object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div class="row-span-1 bg-[transparent] rounded-md h-20">
                
              </div>
              <div class="row-span-1 rounded-md bg-[transparent] h-20"></div>
              <div class="row-span-2 h-40 bg-[white]  rounded-md flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-9/12 items-end overflow-hidden rounded-lg  md:col-span-2"
                >
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2020/07/Hershey-Logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div class="row-span-1 bg-[#fff] h-20 rounded-md flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://www.freepnglogos.com/uploads/dominos-png-logo/dominos-pizza-readies-new-logo-png-10.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div class="row-span-2 h-40 bg-[white] rounded-md flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="/images/Tetra-Pak-logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div class="row-span-1 bg-[white] h-20 rounded-md flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="/images/icici_logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
              <div class="row-span-2 h-40 bg-[white]  rounded-md flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg md:col-span-2"
                >
                  <Image
                    src="/images/Paytm-Logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div class="row-span-2 h-20 bg-[white] rounded-md flex flex-col items-center justify-center">
               <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg  md:col-span-2"
                >
                  <Image
                    src="/images/Godrej.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a> 
              </div>
              <div class="row-span-2 h-40 bg-[white] p-4 rounded-md flex flex-col items-center justify-center">
              <a
                  href="#"
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-lg  md:col-span-2"
                >
                  <Image
                    src="/images/Laser-logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </a>
                
              </div>
              <div class="row-span-1 rounded-md bg-[transparent] h-20"></div>
            </div>
          </motion.div>
          {/* Second Div */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className={
              "flex-2 w-1/2 flex justify-center items-center relative "
            }
          >
            <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0 z-10">
              <h1 className="h1 text-white">
                We Believe in
                <br />
              </h1>
              <h3 className="h3 text-white">
                Our Partner <span className="text-[#F5D856]">makes us</span> a
                successful provider..
              </h3>
              <p className="description max-w-[550px] mx-auto xl:mx-0 md-6 xl:mb-10 text-white">
                Trading your waste has never been simpler. Turn your recyclables
                into cash effortlessly while contributing to a greener planet.
              </p>
              <a
                href="#_"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white  hover:bg-white group w-40 xs:max-md:mt-16"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#F5D856] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">
                  See Details
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartner;

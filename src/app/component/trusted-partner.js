"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";

const TrustedPartner = () => {
  return (
    <section className="relative h-[90vh]">
      <div className={"sm:p-5 xs:p-3 px-2 h-[90vh] py-5 relative bg-primary"}>
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
                  className="group relative flex h-1/2 w-1/2 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://i.pinimg.com/564x/de/64/63/de646309009817507baf01587f107106.jpg"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
             
                    priority
                    style={{ objectFit: "cover" }}
                  />
                
                </a>
                <span className="relative font-bold inline-block text-sm text-black md:text-lg">
                  Reliance Industries
                </span>
              </div>
              <div class="row-span-1 bg-[transparent] rounded-md h-20">
                
              </div>
              <div class="row-span-1 rounded-md bg-[transparent] h-20"></div>
              <div class="row-span-2 h-40 bg-[violet] rounded-md flex flex-col items-center justify-center">
              <span className="relative font-bold inline-block text-sm text-white md:text-lg">
                  Larsen & Tourbo
                </span>
                
              </div>
              <div class="row-span-1 bg-[#fff] h-20 rounded-md flex flex-col items-center justify-center">
              <a
                  href="#"
                  className="group relative flex h-1/2 w-1/2 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://w7.pngwing.com/pngs/807/692/png-transparent-domino-s-pizza-pizza-delivery-food-event-marketing.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <span className="relative font-bold inline-block text-sm text-black md:text-lg">
                  Domino's
                </span>
              </div>
              <div class="row-span-2 h-40 bg-[white] rounded-md flex flex-col items-center justify-center">
              <a
                  href="#"
                  className="group relative flex h-1/2 w-1/2 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2020/03/Decathlon-Logo.png"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              <span className="relative font-bold inline-block text-sm text-black md:text-lg">
                  Decathlon
                </span>
              </div>
              <div class="row-span-1 bg-[white] h-20 rounded-md flex flex-col items-center justify-center">
              <a
                  href="#"
                  className="group relative flex h-1/2 w-1/2 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <span className="relative font-bold inline-block text-sm text-black md:text-lg">
                  Paytm
                </span>
              </div>
              <div class="row-span-2 h-40 bg-[white] p-4 rounded-md flex flex-col items-center justify-center">
              <a
                  href="#"
                  className="group relative flex h-1/2 w-1/2 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
                >
                  <Image
                    src="https://companieslogo.com/img/orig/IBN_BIG.D-4673bbd8.png?t=1648383607"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              <span className="relative font-bold inline-block text-sm text-black md:text-lg">
                  ICICI Bank
                </span>
              </div>
            </div>
            {/* <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 mx-auto w-full bg-[black]">
              
              <div class="bg-red-100 ">
                <span>02</span>
              </div>
              <div class="bg-indigo-100 row-span-1 md:row-span-2">
              <a
                href="#"
                className="group relative flex bg-[red] overflow-hidden rounded-lg bg-gray-100 shadow-lg h-80"
              >
                <Image
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  alt="Photo by Minh Pham"
                  className="inset-0 w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />

                <span className="relative inline-block text-sm text-white md:text-lg">
                  VR
                </span>
              </a>
              </div>
              <div class="bg-red-100 ">
                <span>07678</span>
              </div>
              <div class="bg-purple-100">
                <span>03</span>
              </div>
              
              <div class="bg-purple-100">
                <span>03</span>
              </div>
             
              <div class="bg-indigo-100 row-span-1 md:row-span-2">
                <span>Niche</span>
              </div>
              <div class="bg-emerald-100">
                <span>06</span>

              </div>
              <div class="bg-emerald-100">
                <span>06</span>
              </div>
              <div class="bg-emerald-100">
                <span>06</span>
              </div>
              
            </div> */}
          </motion.div>
          {/* Second Div */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className={
              "flex-2 w-1/3 flex justify-center items-center relative "
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

"use client";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../../utils/motion";

export default function Services() {
  return (
    <section className="relative">
      <div className="absolute w-full h-full bg-[black]/70 z-10"></div>
      <div className={"sm:p-16 xs:p-8 px-6 py-12 relative bg-[#CBE0E6]"}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`2xl:max-w-[1280px] w-full mx-auto flex xl:flex-row lg:flex-row flex-col gap-8`}
        >
          {/* First Div */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className={
              "flex-1 flex justify-center items-center  bg-[] relative xs:max-md:my-8"
            }
          >
            <div className="absolute">
              <video
                autoPlay={true}
                loop={true}
                muted
                className="w-full -z-10 h-full object-contain"
              >
                <source src="./video/services.mp4" type="video/mp4" />
              </video>
              {/* <div className="absolute bg-[black]/70 w-full h-full top-0"></div> */}
            </div>
            <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0 z-10">
              <h1 className="h1 text-white">
                Our Services
                <br />
              </h1>
              <h3 className="h3 text-white">
                Attaining{" "}
                <span className="text-[#F5D856]">sustainable solutions</span>{" "}
                with ease.
              </h3>
              <p className="description max-w-[550px] mx-auto xl:mx-0 md-6 xl:mb-10 text-white">
                Trading your waste has never been simpler. Turn your recyclables
                into cash effortlessly while contributing to a greener planet.
              </p>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white  hover:bg-white group w-40 xs:max-md:mt-16"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#F5D856] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-black">
                  See Details
                </span>
              </a>
            </div>
          </motion.div>
          {/* Second Div */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="flex-1 flex flex-row xs:max-sm:flex-col xs:max-sm:px-0 justify-evenly items-center px-8 z-20 xs:max-md:my-16"
          >
            <div className="w-1/2">
              <div className="flex justify-center items-center">
                <div className="relative bg-white py-6 px-6 w-full my-4 shadow-xl hover:bg-[#38685B] group">
                  <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-[#38685B] left-4 -top-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="mt-8 ">
                    <p className="text-xl font-semibold my-2 group-hover:text-white text-[#38685B]">
                      For Organization
                    </p>
                    <div className="flex space-x-2 text-gray-400 text-sm my-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="group-hover:text-white font-semibold text-primary">Marketing Team</p>
                    </div>

                    <div className="border-t-2"></div>

                    <div className="flex justify-between">
                      <div className="my-2">
                        <p className=" text-sm text-primary group-hover:text-white">
                          The Kabadiwala as a registered PRO, official
                          collection & recycling partner helps in the compliance
                          process of EPR. free pickup of 40+ recyclables.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second card */}
              <div className="flex justify-center items-center">
                <div className="relative bg-white py-6 px-6 w-full my-8 shadow-xl hover:bg-[#38685B] group">
                  <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-[#38685B] left-4 -top-6   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="mt-8 ">
                    <p className="text-xl font-semibold my-2 group-hover:text-white text-[#38685B]">
                      For Organization
                    </p>
                    <div className="flex space-x-2 text-gray-400 text-sm my-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="group-hover:text-white font-semibold text-primary">Marketing Team</p>
                    </div>

                    <div className="border-t-2"></div>

                    <div className="flex justify-between">
                      <div className="my-2">
                        <p className="text-sm text-primary group-hover:text-white">
                          The Kabadiwala as a registered PRO, official
                          collection & recycling partner helps in the compliance
                          process of EPR. free pickup of 40+ recyclables.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-16"></div>

            {/* third card */}
            <div className="flex justify-center items-center w-1/2">
              <div className="relative bg-white py-6 px-6 w-full my-4 shadow-xl hover:bg-[#38685B] group">
                <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-[#38685B] left-4 -top-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="mt-8 ">
                  <p className="text-xl font-semibold my-2 group-hover:text-white text-[#38685B]">
                    For Organization
                  </p>
                  <div className="flex space-x-2 text-gray-400 text-sm my-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="group-hover:text-white font-semibold text-primary">Marketing Team</p>
                  </div>

                  <div className="border-t-2"></div>

                  <div className="flex justify-between">
                    <div className="my-2">
                      <p className=" text-sm text-primary group-hover:text-white">
                        The Kabadiwala as a registered PRO, official collection
                        & recycling partner helps in the compliance process of
                        EPR. free pickup of 40+ recyclables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    // <section className="h-screen flex item-center bg-black" id="services">
    //     <div className="w-50"></div>
    //   <div className="flex items-center justify-center">
    //     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    //       <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    //         <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
    //
    //         </div>
    //         <div className="mt-8">
    //           <p className="text-xl font-semibold my-2">App Development</p>
    //           <div className="flex space-x-2 text-gray-400 text-sm">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>
    //             <p>Marketing Team</p>
    //           </div>
    //           <div className="flex space-x-2 text-gray-400 text-sm my-3">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //               />
    //             </svg>
    //             <p>1 Weeks Left</p>
    //           </div>
    //           <div className="border-t-2"></div>

    //           <div className="flex justify-between">
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Team Member</p>
    //               <div className="flex space-x-2">

    //               </div>
    //             </div>
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Progress</p>
    //               <div className="text-base text-gray-400 font-semibold">
    //                 <p>34%</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    //         <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
    //
    //         </div>
    //         <div className="mt-8">
    //           <p className="text-xl font-semibold my-2">Web Design</p>
    //           <div className="flex space-x-2 text-gray-400 text-sm">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>
    //             <p>Core UI Team</p>
    //           </div>
    //           <div className="flex space-x-2 text-gray-400 text-sm my-3">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //               />
    //             </svg>
    //             <p>3 Weeks Left</p>
    //           </div>
    //           <div className="border-t-2 "></div>

    //           <div className="flex justify-between">
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Team Member</p>
    //               <div className="flex space-x-2">

    //               </div>
    //             </div>
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Progress</p>
    //               <div className="text-base text-gray-400 font-semibold">
    //                 <p>76%</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* card3 */}
    //       <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    //         <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
    //           {/* <!-- svg  --> */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-8 w-8"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    //             />
    //           </svg>
    //         </div>
    //         <div className="mt-8">
    //           <p className="text-xl font-semibold my-2">Leading Page</p>
    //           <div className="flex space-x-2 text-gray-400 text-sm">
    //             {/* <!-- svg  --> */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>
    //             <p>Marketing Team</p>
    //           </div>
    //           <div className="flex space-x-2 text-gray-400 text-sm my-3">
    //             {/* <!-- svg  --> */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //               />
    //             </svg>
    //             <p>2 Days Left</p>
    //           </div>
    //           <div className="border-t-2 "></div>

    //           <div className="flex justify-between">
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Team Member</p>
    //               <div className="flex space-x-2">

    //               </div>
    //             </div>
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Progress</p>
    //               <div className="text-base text-gray-400 font-semibold">
    //                 <p>4%</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <!-- 4 card --> */}
    //       <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    //         <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
    //           {/* <!-- svg  --> */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-8 w-8"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
    //             />
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    //             />
    //           </svg>
    //         </div>
    //         <div className="mt-8">
    //           <p className="text-xl font-semibold my-2">Business Compare</p>
    //           <div className="flex space-x-2 text-gray-400 text-sm">
    //             {/* <!-- svg  --> */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>
    //             <p>Marketing Team</p>
    //           </div>
    //           <div className="flex space-x-2 text-gray-400 text-sm my-3">
    //             {/* <!-- svg  --> */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    //               />
    //             </svg>
    //             <p>1 Month Left</p>
    //           </div>
    //           <div className="border-t-2 "></div>

    //           <div className="flex justify-between">
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Team Member</p>
    //               <div className="flex space-x-2">

    //               </div>
    //             </div>
    //             <div className="my-2">
    //               <p className="font-semibold text-base mb-2">Progress</p>
    //               <div className="text-base text-gray-400 font-semibold">
    //                 <p>90%</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

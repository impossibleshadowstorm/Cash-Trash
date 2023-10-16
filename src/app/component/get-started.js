"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textContainer,
  textVariant2,
} from "../../utils/motion";

const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[60px] text-[40px] text-primary ${textStyles}`}
  >
    {title}
  </motion.h2>
);

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-primary`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-primary leading-[32.4px]">
      {text}
    </p>
  </div>
);

const startingFeatures = [
  "Conveniently schedule a pickup",
  "Have it at your doorstep",
  "And get paid hassle-free",
];

const GetStarted = () => (
  <section className={"sm:p-16 xs:p-8 px-6 py-12 relative -z-2 bg-[white]"}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"}
    >
      <motion.div
        variants={planetVariants("left")}
        className={"flex-1 flex justify-center items-center"}
      >
        <Image
          src="/images/eco.png"
          fill
          style={{ objectFit: "contain" }}
          priority
          alt="How We Work"
          className="w-[90%] h-[90%] object-contain z-0"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How We Work" />
        <TitleText title={<>Here&apos;s Our Secret</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;

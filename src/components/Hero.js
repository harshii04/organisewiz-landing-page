"use client";
import Image from "next/image";
import HeroImg from "../assets/HeroImg.svg";
import { CheckCircle, FigmaLogo, PuzzlePiece } from "@phosphor-icons/react";
import Logo from "../assets/Logo.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        className="container flex md:flex-row flex-col justify-between items-center px-4 md:mt-24 mt-16 z-10"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <Image src={HeroImg} alt="Hero image" draggable={false} />
        </div>
        <div className="pt-8 md:pl-14">
          <div>
            <div className=" flex gap-2 w-fit rounded-full items-center justify-center px-2 py-[6px] -bg--highlight-purple stroke -stroke--stroke-purple stroke">
              <PuzzlePiece
                size={16}
                className="-text--dark-purple"
                weight="fill"
              />
              <p className="font-medium md:text-sm text-xs -text--dark-purple">
                Figma Plugin
              </p>
            </div>
            <div className="flex gap-2 items-center pt-4">
              <Image src={Logo} alt="Plugin icon" />
              <h1 className="font-bold text-4xl text-white">Organise Wiz</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:pr-24">
            <div className="flex gap-3 pt-8">
              <CheckCircle
                size={24}
                weight="fill"
                className="-text--highlight-purple"
              />
              <p className="font-medium text-base -text--text-purple">
                Effortlessly create, customise, and organise your Figma pages
                like never before.
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle
                size={24}
                weight="fill"
                className="-text--highlight-purple"
              />
              <p className="font-medium text-base -text--text-purple">
                Effortlessly create, customise, and organise your Figma pages
                like never before.
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle
                size={24}
                weight="fill"
                className="-text--highlight-purple"
              />
              <p className="font-medium text-base -text--text-purple">
                Effortlessly create, customise, and organise your Figma pages
                like never before.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="group flex gap-2 -bg--primary-purple hover:-bg--btn-hover w-fit px-3 py-2 font-semibold text-base text-white hover:cursor-pointer rounded-full  transition-all duration-300 ease-in-out hover:text-opacity-80">
              <FigmaLogo
                size={24}
                className="group-hover:opacity-80"
                weight="duotone"
              />
              <p>Install now on Figma</p>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;

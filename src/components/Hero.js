"use client";
import Image from "next/image";
import HeroImg from "../assets/HeroImg.svg";
import {
  ArrowBendDownRight,
  CheckCircle,
  FigmaLogo,
  PuzzlePiece,
} from "@phosphor-icons/react";
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
          <Image
            src={HeroImg}
            alt="Hero image"
            draggable={false}
            className="select-none"
          />
        </div>
        <div className="pt-8 md:pl-14">
          <div>
            <div className=" flex gap-2 w-fit rounded-full items-center justify-center px-2 py-[6px] -bg--highlight-purple stroke -stroke--stroke-purple stroke">
              <PuzzlePiece
                size={16}
                className="-text--dark-purple"
                weight="fill"
              />
              <p className="font-medium md:text-sm text-xs -text--dark-purple select-none">
                Figma Plugin
              </p>
            </div>
            <div className="flex gap-2 items-center pt-4">
              <Image src={Logo} alt="Plugin icon" className="select-none" />
              <h1 className="font-bold text-4xl text-white select-none">
                Organise Wiz
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:pr-24">
            <div className="flex gap-3 pt-8">
              <ArrowBendDownRight
                weight="fill"
                className="-text--highlight-purple w-6 h-6"
              />
              <p className="font-medium text-base -text--text-purple select-none">
                Effortlessly create, customise, and organise your Figma pages
                like never before.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowBendDownRight
                size={20}
                weight="fill"
                className="-text--highlight-purple"
              />
              <p className="font-medium text-base -text--text-purple select-none">
                Get up and running in no time with our time-saving templates.
              </p>
            </div>
            <div className="flex gap-3">
              <ArrowBendDownRight
                size={20}
                weight="fill"
                className="-text--highlight-purple"
              />
              <p className="font-medium text-base -text--text-purple select-none">
                Design without distractions, and focus on what you do best.
              </p>
            </div>
          </div>
          <div className="pt-10">
            <div className="group flex items-center justify-center gap-2 -bg--primary-purple ring-[2px] ring-[#6139D1] border-t border-b border-white border-opacity-30 md:w-fit px-3 py-2 font-semibold text-base text-white hover:cursor-not-allowed rounded-full transition-all duration-300 ease-in-out hover:text-opacity-80">
              <FigmaLogo
                size={24}
                className="group-hover:opacity-80"
                weight="duotone"
              />
              <p className="select-none">Coming soon!</p>{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;

"use client";
import Image from "next/image";
import FooterIMG from "../assets/FooterIMG.svg";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4 items-center justify-center pb-8">
          <Image
            src={FooterIMG}
            alt="Footer Abstract pattern"
            className="h-fit"
            draggable={false}
          />
          <p className="font-medium text-xs -text--icon-white">
            Crafted by Harsh and Abhishek
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;

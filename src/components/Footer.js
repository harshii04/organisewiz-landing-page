"use client";
import Image from "next/image";
import FooterIMG from "../assets/FooterIMG.svg";
import { motion } from "framer-motion";
import Link from "next/link";
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
            className="select-none"
            draggable={false}
          />

          <p className="font-medium text-xs -text--icon-white select-none">
            Crafted with 🫶 by{" "}
            <Link
              className="hover:underline transition-all duration-300 ease-in-out"
              href="https://twitter.com/harshii04"
              target="_blank"
            >
              Harsh
            </Link>{" "}
            and{" "}
            <Link
              className="hover:underline transition-all duration-300 ease-in-out"
              href="https://twitter.com/abhii__agarwal"
              target="_blank"
            >
              Abhishek
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;

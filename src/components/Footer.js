import Image from "next/image";
import FooterIMG from "../assets/FooterIMG.svg";

const Footer = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Footer;

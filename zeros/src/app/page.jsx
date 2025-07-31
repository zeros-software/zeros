import Image from "next/image";
import Logo from "../assets/zeros.png";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <div className="px-6 py-4 text-black sf-pro font-medium text-2xl gap-10 flex items-start">
        <a className="" href="/">
          Home
        </a>
        <a className="" href="/about">
          About us
        </a>
        <a className="" href="/services">
          Services
        </a>
        <a className="" href="/portfolio">
          Portfolio
        </a>
        <a className="" href="/contact">
          Contact
        </a>
      </div>
      <div className="absolute bottom-0 flex flex-col gap-4 bg-white p-6 mx-auto">
        <div className="flex flex-row items-center text-black sf-pro font-medium text-2xl gap-10 underline underline-offset-5">
          <a>
            → Instagram
          </a>
          <a>
            → Github
          </a>
          <a>
            → LinkedIn
          </a>
          <a>
            → Mail
          </a>
        </div>
        <Image
          src={Logo}
          alt="Logo"
          className="justify-center items-center flex"
        />
      </div>
    </div>
  );
}

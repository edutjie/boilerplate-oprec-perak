import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full top-0 min-w-max bg-light-yellow z-10">
      <div className="flex justify-between px-6 py-3 items-center">
        <div className="flex items-center">
          <Link href={"/"} passHref>
            <div className="pr-3 cursor-pointer">
              <Image
                src="/assets/logo.svg"
                alt="Logo Perak"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <h1 className="font-extrabold cursor-default">
            PESTA RAKYAT
            <br />
            KOMPUTER
          </h1>
        </div>
        <div className="flex lg:gap-14">
          <div className="font-bold lg:hidden">
            <Link href={"/"}>Pendaftaran</Link>
          </div>
          <div className="font-bold hidden lg:block">
            <Link href={"/"}>Score Games Map</Link>
          </div>
          <div className="font-bold hidden lg:block">
            <Link href={"/"}>Team Profile</Link>
          </div>
          <div className="font-bold hidden lg:block">
            <Link href={"/"}>News</Link>
          </div>
          <div className="font-bold hidden lg:block">
            <Link href={"/"}>Explore Cafeteria</Link>
          </div>
          <div className="font-bold hidden lg:block">
            <Link href={"/"}>Merchandise</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

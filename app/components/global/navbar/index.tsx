import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full top-0 min-w-max bg-light-yellow">
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
        <div className="font-bold">
          <Link href={"/"}>Pendaftaran</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

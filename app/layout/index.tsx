import React from "react";
import Header from "../components/global/header";
import Navbar from "../components/global/navbar";
import { LayoutInterface } from "./interfaces/Layout.interface";

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-dark-yellow h-full fixed w-full -z-10">{children}</main>
    </>
  );
};

export default Layout;

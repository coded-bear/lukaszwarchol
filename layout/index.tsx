import React from "react";
import Navbar from "../components/Navbar";
import HireMeBox from "../components/HireMeBox";
import Footer from "../components/Footer";
import { LayoutProps } from "./interfaces";

const Layout: React.FC<LayoutProps> = props => (
  <>
    <Navbar />

    <main>
      {props.children}

      <HireMeBox />
    </main>

    <Footer />
  </>
);

export default Layout;

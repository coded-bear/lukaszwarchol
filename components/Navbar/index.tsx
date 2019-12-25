import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
  <header>
    <Link href="" as="" prefetch={false}>
      <a>{/* logo */}</a>
    </Link>

    <div>
      <div>{/* lang checking */}</div>
      <button>{/* navbtn */}</button>
    </div>
  </header>
);

export default Navbar;

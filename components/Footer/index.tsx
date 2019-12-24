import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer>
    <div>{/* social media */}</div>

    <p>
      <Link href="" as="" prefetch={false}>
        <a>Privacy Policy</a>
      </Link>
    </p>

    <p>
      &copy; {new Date().getFullYear()} <span>Łukasz Warchoł</span>. All rights reserved
    </p>
  </footer>
);

export default Footer;

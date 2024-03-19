"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-[#4e70f7]">
      <div className="flex items-center justify-between container text-white py-3">
        <div>Logo</div>
        <ul className="flex items-center gap-10">
          <Link
            href="/"
            className={`cursor-pointer ${pathname == "/" ? "text-black" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            className={`cursor-pointer ${
              pathname == "/aboutUs" ? "text-black" : ""
            }`}
          >
            About us
          </Link>
          <Link
            href="/blog"
            className={`cursor-pointer ${
              pathname == "/blog" ? "text-black" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href=""
            className={`cursor-pointer ${
              pathname == "/contact" ? "text-black" : ""
            }`}
          >
            Contact us
          </Link>
          <Link
            href="/features"
            className={`cursor-pointer ${
              pathname == "/features" ? "text-black" : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/master"
            className={`cursor-pointer ${
              pathname == "/master" ? "text-black" : ""
            }`}
          >
            Master
          </Link>
        </ul>
        <button className="bg-white text-black px-7 py-3 rounded-md">
          Buy now
        </button>
      </div>
    </nav>
  );
};

export default Header;

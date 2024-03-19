import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
    
  return (
    <main>
      <aside className="w-[300px] h-screen border-r shadow-lg rounded-md fixed ">
        <ul className="p-10">
          <li className="text-lg cursor-pointer leading-[2.5]">
            <i className="ri-live-line pe-5"></i>
            <Link href="/master">video</Link>
          </li>
          <li className="text-lg cursor-pointer leading-[2.5]">
            <i className="ri-file-chart-line pe-5"></i>
            <Link href="/master/portfolio">portfolio</Link>
          </li>
          <li className="text-lg cursor-pointer leading-[2.5]">
            <i className="ri-contacts-line pe-5"></i>
            <Link href="/master/contact">contacts</Link>
          </li>
          <li className="text-lg cursor-pointer leading-[2.5]">
            <i className="ri-blogger-line pe-5"></i>

            <Link href="/master/blog-comments">blog comments</Link>
          </li>
          <li className="text-lg cursor-pointer leading-[2.5]">
            <i className="ri-feedback-line pe-5"></i>
            feedbacks
          </li>
        </ul>
      </aside>
      <section className="ml-[300px] p-5">{children}</section>
    </main>
  );
};

export default Layout;

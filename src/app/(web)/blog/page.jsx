"use client";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
const Page = () => {
  const router = useRouter();
  const handleNavigate = () => {
    redirect("/");
  };
  return (
    <div className="container">
      {/* <h2>blog</h2>
      <button onClick={() => router.push("/aboutUs")} className="block">
        Go to about us
      </button>
      <button onClick={handleNavigate}>Go to home</button> */}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {["education", "tech", "gaming", "blogging", "fun"].map(
          (item, index) => {
            return (
              <Link
                href={`/blog/${item}`}
                className="bg-white rounded-lg shadow-lg p-5 hover:scale-[1.05] duration-500 cursor-pointer"
                key={index}
              >
                <h2 className="text-xl mb-5 capitalize border-b pb-3">
                  {item}
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis distinctio nesciunt porro. Doloremque accusamus
                  exercitationem beatae numquam temporibus itaque vel fuga
                  expedita aut incidunt, quae aliquid similique minima sint
                  porro magni nam, ab tempora doloribus blanditiis enim
                  architecto? Accusantium corrupti voluptatem ex mollitia, minus
                  distinctio aperiam consequuntur ipsam! Est, cupiditate?
                </p>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Page;

import Link from "next/link";
import React from "react";

export const metadata = {
  title: "aboutUs | test",
};

const Page = () => {
  return (
    <div className="container">
      <h2 className="block">About us</h2>
      <Link href="/" className="button">
        Go to home
      </Link>
    </div>
  );
};

export default Page;

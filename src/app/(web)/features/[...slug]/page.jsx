"use client";

// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const Page = ({ params }) => {
  console.log(params);

  // const { image } = router.query;
  return (
    <div className="container mt-10">
      <div>{/* <img src={image} alt="" /> */}</div>
    </div>
  );
};

export default Page;

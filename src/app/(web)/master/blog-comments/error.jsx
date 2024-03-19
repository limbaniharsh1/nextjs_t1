"use client";
import React from "react";

const Error = ({ reset }) => {
  return (
    <div>
      <p>Something went wrong</p>{" "}
      <button
        onClick={reset}
        className="bg-blue-400 text-white px-7 py-2 rounded-md mt-3"
      >
        retry
      </button>{" "}
    </div>
  );
};

export default Error;

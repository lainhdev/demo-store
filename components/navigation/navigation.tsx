import React from "react";
import Topbar from "./topbar";
import Navbar from "./navbar";

const Navigation = () => {
  return (
    <div>
      <Topbar />
      <div className="hidden md:block bg-white w-full">
        <div className="max-w-screen-xl mx-auto px-5 py-2 flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Navigation;

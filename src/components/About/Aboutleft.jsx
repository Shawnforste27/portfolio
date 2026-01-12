import React from "react";
import me from "../../assets/me.png";

const Aboutleft = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-3/4]">
        <img
          src={me}
          alt="Ambikesh"
          className="rounded-2xl shadow-xl object-cover w-full h-full"
        />

        {/* green border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-green-500/30 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Aboutleft;
import React from "react";
import defaultAvatar from "../assets/default_avatar.jpg";

const Header = () => {
  return (
    <div className="h-16 border-b flex items-center justify-between w-screen px-5 md:px-20">
      <span className="text-primary text-2xl lg:text-4xl font-semibold">
        Vacation planner
      </span>
      <div className="w-12 container-data ml-20">
        <img
          src={defaultAvatar}
          alt="Preview"
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

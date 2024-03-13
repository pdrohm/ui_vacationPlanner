import React from "react";
import defaultAvatar from "../assets/default_avatar.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-16 w-screen items-center justify-between border-b px-5 md:px-20">
      <span
        className="cursor-pointer text-2xl font-semibold text-primary lg:text-4xl"
        onClick={() => navigate("/")}
      >
        Vacation planner
      </span>
      <div className="container-data ml-20 w-12">
        <img
          src={defaultAvatar}
          alt="Preview"
          className="h-full w-full rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

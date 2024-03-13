import React from "react";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-lg py-10">
      <div className="flex w-full flex-col items-start space-x-0 space-y-5 md:flex-row md:items-center md:justify-between md:space-x-5 md:space-y-0">
        <h1 className="text-3xl font-semibold">My planned vacation trips</h1>
        <button className="rounded-full bg-primary px-5 py-2 text-white hover:bg-primary/65">
          + Plan holiday
        </button>
      </div>
    </div>
  );
};

export default HomePage;

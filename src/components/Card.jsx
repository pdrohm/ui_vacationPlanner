import React from "react";

const Card = ({ plan }) => {
  const imageUrl =
    "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg";
  return (
    <div className="flex w-full cursor-pointer flex-col items-start justify-center gap-y-2 bg-white p-6">
      <img
        src={imageUrl}
        alt="Imagem"
        className="w-full rounded-md hover:scale-105"
      />
      <h2 className=" text-lg hover:opacity-80">{plan.title}</h2>
      <div className="flex gap-x-4">
        <p className="text-sm text-gray-600"> {plan.startDate}</p>
        <p className="text-sm text-gray-600"> {plan.endDate}</p>
      </div>
    </div>
  );
};

export default Card;

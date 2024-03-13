import React from "react";
import { format, parseISO } from "date-fns";

const Card = ({ plan }) => {
  const startDate = parseISO(plan.startDate);
  const endDate = parseISO(plan.endDate);

  const startFormattedDate = format(startDate, "MMMM dd yy");
  const endFormattedDate = format(endDate, "MMMM dd yy");

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
      <p>{plan.description}</p>
      <div className="flex gap-x-4">
        <p className="text-sm text-gray-600">{startFormattedDate}</p>-
        <p className="text-sm text-gray-600">{endFormattedDate}</p>
      </div>
    </div>
  );
};

export default Card;

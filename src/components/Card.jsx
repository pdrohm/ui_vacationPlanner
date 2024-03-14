import React, { useContext, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import PlanContext from "../context/PlanContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CardFloatingButton from "./CardFloatingButton";
import imageUrl from "/defaultCover.webp";

const Card = ({ plan }) => {
  const startDate = parseISO(plan.startDate);
  const endDate = parseISO(plan.endDate);

  const startFormattedDate = format(startDate, "MMM dd yy");
  const endFormattedDate = format(endDate, "MMM dd yy");

  const navigate = useNavigate();
  const { getPlanById } = useContext(PlanContext);

  const handleCardClick = async (plan) => {
    await getPlanById(plan.id);
    navigate(`/plan/${plan.id}`);
  };

  return (
    <div
      className="flex w-full cursor-pointer flex-col items-start justify-center gap-y-2 bg-white p-6"
      onClick={() => handleCardClick(plan)}
    >
      <div>
        <LazyLoadImage
          src={imageUrl}
          alt="Planned Trip Image choosen by user"
          className="w-full rounded-md hover:scale-105"
          loading="lazy"
        />
        <CardFloatingButton plan={plan} />
      </div>

      <h2 className=" text-lg hover:opacity-80">{plan.title}</h2>
      <div className="flex gap-x-1">
        <p className="text-sm text-gray-600">{startFormattedDate}</p>-
        <p className="text-sm text-gray-600">{endFormattedDate}</p>
      </div>
    </div>
  );
};

export default Card;

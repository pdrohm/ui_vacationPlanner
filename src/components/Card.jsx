import React, { useContext } from "react";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import PlanContext from "../context/PlanContext";
import CardFloatingButton from "./CardFloatingButton";

const Card = ({ plan }) => {
  const { setSelectedPlan } = useContext(PlanContext);
  const startDate = parseISO(plan.startDate);
  const endDate = parseISO(plan.endDate);

  const startFormattedDate = format(startDate, "MMMM dd yy");
  const endFormattedDate = format(endDate, "MMMM dd yy");

  const navigate = useNavigate();

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    navigate(`/plan/${plan.id}`);
  };

  const imageUrl =
    "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg";
  return (
    <div
      className="flex w-full cursor-pointer flex-col items-start justify-center gap-y-2 bg-white p-6"
      onClick={() => handleCardClick(plan)}
    >
      <div>
        <img
          src={imageUrl}
          alt="Planned Trip Image choosen by user"
          className="w-full rounded-md hover:scale-105"
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

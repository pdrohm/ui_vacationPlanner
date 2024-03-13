import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import EditPlanForm from "../components/EditPlanForm";
import PlanContext from "../context/PlanContext";

const PlanPage = () => {
  const { selectedPlan } = useContext(PlanContext);

  const imageUrl =
    "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg";

  return (
    <div className="mx-auto flex max-w-screen-xl justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-y-5 lg:w-1/2 lg:border-2 lg:px-0">
        <img src={imageUrl} className="w-full" />
        <EditPlanForm plan={selectedPlan} />
      </div>
    </div>
  );
};

export default PlanPage;

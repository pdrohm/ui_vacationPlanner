import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import EditPlanForm from "../components/EditPlanForm";
import PlanContext from "../context/PlanContext";
import { Helmet } from "react-helmet";
import imageUrl from "/defaultCover.webp";

const PlanPage = () => {
  const { selectedPlan } = useContext(PlanContext);

  return (
    <>
      <Helmet>
        <title>Vacation Planner - {selectedPlan.title}</title>
        <meta
          name="description"
          content={`View details about the vacation plan "${selectedPlan.title}" on Vacation Planner.`}
        />
      </Helmet>
      <div className="mx-auto flex max-w-screen-xl justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-y-5 lg:w-1/2 lg:border-2 ">
          <img src={imageUrl} className="w-full" />
          <EditPlanForm plan={selectedPlan} />
        </div>
      </div>
    </>
  );
};

export default PlanPage;

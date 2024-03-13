import React, { useContext } from "react";
import PlanContext from "../context/PlanContext";
import Card from "../components/Card";

const HomePage = () => {
  const { plans } = useContext(PlanContext);
  return (
    <div className="mx-auto max-w-screen-lg py-10">
      <div className="mb-10 flex w-full flex-col items-start space-x-0 space-y-5 md:flex-row md:items-center md:justify-around md:space-x-5 md:space-y-0 lg:justify-between">
        <h1 className="text-3xl font-semibold">My planned vacation trips</h1>
        <button className="rounded-full bg-primary px-5 py-2 text-white hover:bg-primary/65">
          + Plan holiday
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {plans.map((plan) => (
          <Card key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

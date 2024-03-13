import React, { useContext } from "react";
import PlanContext from "../context/PlanContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { plans } = useContext(PlanContext);

  const navigate = useNavigate();

  const handleCreatePlanClick = () => {
    navigate("/createPlan");
  };

  return (
    <div className="mx-auto max-w-screen-lg py-10">
      <Helmet>
        <title>Vacation Planner - Home</title>
        <meta
          name="description"
          content="Visualize and manage your vacation plans on the Vacation Planner Dashboard."
        />
      </Helmet>
      <div className="mb-10 flex w-full flex-col items-start space-x-0 space-y-5 px-4 md:flex-row md:items-center md:justify-around md:space-x-5 md:space-y-0 lg:justify-between">
        <h1 className="text-3xl font-semibold">My planned vacation trips</h1>
        <button className="btn" onClick={() => handleCreatePlanClick()}>
          + Plan holiday
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.id} className="h-full">
            <Card plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

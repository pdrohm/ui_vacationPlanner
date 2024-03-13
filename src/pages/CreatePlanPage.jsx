import React from "react";
import CreatePlanForm from "../components/CreatePlanForm";
import { Helmet } from "react-helmet";

const CreatePlanPage = () => {
  return (
    <>
      <Helmet>
        <title>Vacation Planner - Create Plan</title>
        <meta
          name="description"
          content="Create a new vacation plan on the Vacation Planner platform."
        />
      </Helmet>
      <div className="flex flex-col items-center py-10">
        <h1 className="mb-20 text-2xl font-semibold md:text-4xl">
          Lets plan a vacation!
        </h1>
        <CreatePlanForm />
      </div>
    </>
  );
};

export default CreatePlanPage;

import React from "react";
import CreatePlanForm from "../components/CreatePlanForm";

const CreatePlanPage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="mb-20 text-2xl font-semibold md:text-4xl">
        Lets plan a vacation!
      </h1>
      <CreatePlanForm />
    </div>
  );
};

export default CreatePlanPage;

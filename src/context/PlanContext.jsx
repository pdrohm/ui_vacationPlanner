import React, { createContext, useState, useEffect } from "react";
import plainVacationService from "../services/plainVacationService";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();

  console.log(`selectedPlan`, selectedPlan);

  const fetchPlans = async () => {
    try {
      const plansFetched = await plainVacationService.getAllPlainVacations();
      setPlans(plansFetched);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const addPlan = async (plan) => {
    try {
      await plainVacationService.createPlainVacation(plan);

      fetchPlans();
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  const editPlan = async (id, plan) => {
    try {
      const updatedPlan = await plainVacationService.editPlainVacation(
        id,
        plan,
      );

      setSelectedPlan(updatedPlan);

      fetchPlans();
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <PlanContext.Provider
      value={{
        plans,
        fetchPlans,
        addPlan,
        editPlan,
        selectedPlan,
        setSelectedPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContext;

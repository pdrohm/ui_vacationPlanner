import React, { createContext, useState, useEffect } from "react";
import plainVacationService from "../services/plainVacationService";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  console.log(plans);

  const fetchPlans = async () => {
    try {
      const plansFetched = await plainVacationService.getAllPlainVacations();
      console.log(`plansFetched`, plansFetched);
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

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <PlanContext.Provider value={{ plans, fetchPlans, addPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContext;

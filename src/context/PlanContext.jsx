import React, { createContext, useState, useEffect } from "react";
import plainVacationService from "../services/plainVacationService";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [singlePlan, setSinglePlan] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    try {
      const plansFetched = await plainVacationService.getAllPlainVacations();
      setPlans(plansFetched);
      setLoading(false);
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

      fetchPlans();
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      await plainVacationService.deletePlainVacation(id);

      fetchPlans();
    } catch (error) {
      console.error("Error adding plan:", error);
    }
  };

  const getPlanById = async (id) => {
    console.log("PASOSU");
    try {
      const plan = await plainVacationService.getPlainById(id);

      setSinglePlan(plan);

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
        deletePlan,
        loading,
        getPlanById,
        singlePlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContext;

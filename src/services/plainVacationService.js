import { toast } from "react-toastify";
import httpClient from "../utils/httpClient";

const plainVacationService = {
  getAllPlainVacations: async () => {
    try {
      const response = await httpClient.get("/vacation-plans");
      return response.data;
    } catch (error) {
      console.error("Error getting all plain vacations:", error);
      throw error;
    }
  },

  createPlainVacation: async (plainVacationData) => {
    try {
      const response = await httpClient.post(
        "/vacation-plans",
        plainVacationData
      );
      toast.success("Plain vacation created successfully");
      return response.data;
    } catch (error) {
      console.error("Error creating plain vacation:", error);
      toast.error("Error creating plain vacation");
      throw error;
    }
  },

  editPlainVacation: async (id, plainVacationData) => {
    try {
      const response = await httpClient.put(
        `/vacation-plans/${id}`,
        plainVacationData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating plain vacation:", error);
      throw error;
    }
  },

  deletePlainVacation: async (id) => {
    try {
      const response = await httpClient.delete(`/vacation-plans/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting plain vacation:", error);
      throw error;
    }
  },
};

export default plainVacationService;

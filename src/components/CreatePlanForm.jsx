import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import PlanContext from "../context/PlanContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatePlanForm = ({ setModalOpen }) => {
  const { addPlan } = useContext(PlanContext);
  const {
    handleSubmit,
    reset,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const onSubmit = (data) => {
    try {
      addPlan(data);
      afterSubmit();
    } catch (error) {
      console.log("error", error);
    }
  };

  const afterSubmit = () => {
    reset();
    setModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="plan-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="w-full"
        />
      </div>

      <div>
        <label>Date Range:</label>
        <ReactDatePicker
          startDate={watch("startDate", null)}
          endDate={watch("endDate", null)}
          selectsRange={true}
          onChange={(dates) => {
            setValue("startDate", dates[0]);
            setValue("endDate", dates[1]);
          }}
          dateFormat="dd MMM yyyy"
        />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          {...register("location", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="participants">Participants:</label>
        <input id="participants" type="text" {...register("participants")} />
      </div>

      <button type="submit" className="btn">
        Add Plan
      </button>
      <div className="border-none text-red-600">
        {errors.title && <span>Field title is required</span>}
        {errors.description && <span>Field description is required</span>}
        {errors.dateRange && <span>{errors.dateRange.message}</span>}
        {errors.location && <span>Field location is required</span>}
      </div>
    </form>
  );
};

export default CreatePlanForm;

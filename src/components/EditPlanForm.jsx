import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from "react-icons/io";
import { LiaCalendar } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import PlanContext from "../context/PlanContext";

const EditPlanForm = () => {
  const { editPlan, selectedPlan: plan } = useContext(PlanContext);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date(plan.startDate));
  const [endDate, setEndDate] = useState(new Date(plan.endDate));

  const onSubmit = (data) => {
    try {
      editPlan(plan.id, data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="plan">
      <div>
        <input
          id="title"
          type="text"
          defaultValue={plan.title}
          {...register("title", { required: true })}
          className="rounded-md p-2 text-2xl font-semibold uppercase hover:bg-gray-100"
        />
      </div>

      <div>
        <textarea
          id="description"
          defaultValue={plan.description}
          {...register("description", { required: true })}
          className="w-full p-2 "
        />
      </div>

      <div className="flex items-center gap-x-2 p-2">
        <LiaCalendar />
        <ReactDatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          onChange={(dates) => {
            // Update the selected start and end dates
            setStartDate(dates[0]);
            setEndDate(dates[1]);
            // Also update the form values
            setValue("startDate", dates[0]);
            setValue("endDate", dates[1]);
          }}
          dateFormat="dd MMM yyyy"
        />
      </div>

      <div className="flex items-center gap-x-2 p-2">
        <TfiLocationPin />

        <input
          id="location"
          type="text"
          defaultValue={plan.location}
          {...register("location", { required: true })}
        />
      </div>

      <div className="p-2">
        <input
          id="participants"
          type="text"
          defaultValue={plan.participants}
          {...register("participants")}
        />
      </div>

      <div className="border-none text-red-600">
        {errors.title && <span>Field title is required</span>}
        {errors.description && <span>Field description is required</span>}
        {errors.dateRange && <span>{errors.dateRange.message}</span>}
        {errors.location && <span>Field location is required</span>}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn">
          Update Plan
        </button>
      </div>
    </form>
  );
};

export default EditPlanForm;

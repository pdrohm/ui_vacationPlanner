import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LiaCalendar } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import PlanContext from "../context/PlanContext";
import ActionsButton from "./ActionsButton";
import ParticipantsInput from "./ParticipantsInput";

const EditPlanForm = () => {
  const { editPlan, selectedPlan: plan } = useContext(PlanContext);

  console.log(`plan`, plan);

  const [startDate, setStartDate] = useState(new Date(plan.startDate));
  const [endDate, setEndDate] = useState(new Date(plan.endDate));
  const [selectedOptions, setSelectedOptions] = useState([]);

  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const selectInputRef = useRef();

  const onSubmit = (data) => {
    try {
      data.participants = selectedOptions.map((option) => option.value);

      editPlan(plan.id, data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="plan w-full ">
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
            setStartDate(dates[0]);
            setEndDate(dates[1]);
            setValue("startDate", dates[0]);
            setValue("endDate", dates[1]);
          }}
          dateFormat="dd MMM yyyy"
          className="p-2"
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
        <div className="flex items-center gap-x-4">
          <label htmlFor="participants">Participants:</label>
          <ParticipantsInput
            control={control}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            ref={selectInputRef}
          />
        </div>

        <div className="w-1/2"></div>
      </div>

      <div className="border-none text-red-600">
        {errors.title && <span>Field title is required</span>}
        {errors.description && <span>Field description is required</span>}
        {errors.dateRange && <span>{errors.dateRange.message}</span>}
        {errors.location && <span>Field location is required</span>}
      </div>

      <div className="mb-2 flex justify-between px-4 ">
        <div className="flex ">
          <ActionsButton plan={plan} editScreen />
        </div>
        <button type="submit" className="btn">
          Update Plan
        </button>
      </div>
    </form>
  );
};

export default EditPlanForm;

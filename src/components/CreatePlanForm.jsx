import React, { useContext, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import PlanContext from "../context/PlanContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ParticipantsInput from "./ParticipantsInput";
import { useNavigate } from "react-router-dom";

import { TfiLocationPin } from "react-icons/tfi";
import { LiaCalendar } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";

const CreatePlanForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const selectInputRef = useRef();

  const navigate = useNavigate();

  const { addPlan } = useContext(PlanContext);
  const {
    handleSubmit,
    reset,
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.participants = selectedOptions.map((option) => option.value);
      await addPlan(data);
      afterSubmit();
    } catch (error) {
      console.log("error", error);
    }
    navigate("/");
  };

  const afterSubmit = () => {
    reset();
    selectInputRef.current.clearValue();
  };

  return (
    <div className="w-2/3 lg:w-1/5">
      <form onSubmit={handleSubmit(onSubmit)} className="plan-form">
        <div className="container">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
          />
        </div>

        <div className="container">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="w-full"
          />
        </div>
        <div className="container">
          <LiaCalendar />
          <label>Date</label>
          <ReactDatePicker
            startDate={watch("startDate", null)}
            endDate={watch("endDate", null)}
            selectsRange
            onChange={(dates) => {
              setValue("startDate", dates[0]);
              setValue("endDate", dates[1]);
            }}
            dateFormat="dd MMM yyyy"
            className="w-44 lg:w-60"
          />
        </div>

        <div className="container">
          <TfiLocationPin />
          <label htmlFor="location">Location:</label>

          <input
            id="location"
            type="text"
            {...register("location", { required: true })}
          />
        </div>

        <div className="container">
          <IoIosPeople />
          <label htmlFor="participants">Participants:</label>
          <ParticipantsInput
            control={control}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            ref={selectInputRef}
          />
        </div>

        <button type="submit" className="btn">
          Add Plan
        </button>
        <div className="flex flex-col border-none text-red-600">
          {errors.title && <span>Field title is required</span>}
          {errors.description && <span>Field description is required</span>}
          {errors.dateRange && <span>{errors.dateRange.message}</span>}
          {errors.location && <span>Field location is required</span>}
        </div>
      </form>
    </div>
  );
};

export default CreatePlanForm;

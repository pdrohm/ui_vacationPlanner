import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LiaCalendar } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io";

import PlanContext from "../context/PlanContext";
import ActionsButton from "./ActionsButton";
import ParticipantsInput from "./ParticipantsInput";
import LocationAutocomplete from "./LocationAutocomplete";

const EditPlanForm = ({ plan }) => {
  const { editPlan } = useContext(PlanContext);

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

  const onSubmit = async (data) => {
    try {
      data.participants = selectedOptions.map((option) => option.value);

      await editPlan(plan.id, data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (plan.participants) {
      setSelectedOptions(
        plan.participants.map((participant) => ({
          value: participant,
          label: participant,
        })),
      );
    }
  }, [plan]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="plan w-full px-5 lg:px-2"
    >
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
        <div className="w-1/2">
          <LocationAutocomplete
            control={control}
            defaultValue={plan.location}
            setValue={setValue}
          />
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center gap-x-2">
          <IoIosPeople />
          <label htmlFor="participants">Participants:</label>
          <ParticipantsInput
            control={control}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
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

      <div className="my-6 flex justify-between px-4 ">
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

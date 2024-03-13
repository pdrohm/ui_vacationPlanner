import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const ParticipantsInput = ({
  control,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [inputValue, setInputValue] = useState("");

  const selectInputRef = useRef();

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (!event.target.value) return;

    if (event.key === "Enter") {
      event.preventDefault();
      const newOption = {
        label: event.target.value,
        value: event.target.value,
      };
      setSelectedOptions([...selectedOptions, newOption]);
      setInputValue("");
    }
  };

  return (
    <div>
      <Controller
        name="participants"
        control={control}
        render={({ field }) => (
          <Select
            ref={selectInputRef}
            id="participants"
            isMulti
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onKeyDown={handleKeyDown}
            options={selectedOptions}
            placeholder="Type and hit enter"
          />
        )}
      />
    </div>
  );
};

export default ParticipantsInput;

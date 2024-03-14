import React from "react";
import { Controller } from "react-hook-form";
import TagsInput from "react-tagsinput";

const ParticipantsInput = ({
  control,
  selectedOptions,
  setSelectedOptions,
  ref,
}) => {
  const handleChange = (tags) => {
    setSelectedOptions(tags.map((tag) => ({ value: tag, label: tag })));
  };

  return (
    <div>
      <Controller
        name="participants"
        control={control}
        render={({ field }) => (
          <TagsInput
            ref={ref}
            value={selectedOptions.map((option) => option.value)}
            onChange={handleChange}
            inputProps={{ placeholder: "Type and hit enter" }}
            className="react-tagsinput"
            tagProps={{
              className: "react-tagsinput-tag",
            }}
          />
        )}
      />
    </div>
  );
};

export default ParticipantsInput;

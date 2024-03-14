import React from "react";
import { Controller } from "react-hook-form";
import Autocomplete from "react-google-autocomplete";

const apiKey = import.meta.env.VITE_GOOGLE_API;

const LocationAutocomplete = ({ control, defaultValue }) => {
  return (
    <Controller
      name="location"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Autocomplete
          apiKey={apiKey}
          onPlaceSelected={(place) => field.onChange(place.formatted_address)}
          defaultValue={defaultValue}
          className="w-full p-2"
        />
      )}
    />
  );
};

export default LocationAutocomplete;

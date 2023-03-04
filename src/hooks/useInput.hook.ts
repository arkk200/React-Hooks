import React, { useState } from "react";

export const useInput = (
  initialValue: any,
  validator: (value: any) => boolean
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(event.target.value);
    }
    if (willUpdate) setValue(event.target.value);
  };
  return { value, onChange };
};

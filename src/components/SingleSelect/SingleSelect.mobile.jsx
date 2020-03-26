import React from "react";
import { SelectBox } from "./SingleSelect.styles";

const MobileSelect = ({ data, onChange, buttonText = "Select" }) => {
  return (
    <SelectBox onChange={onChange}>
      <option>{buttonText}</option>
      {data.map((item, index) => (
        <option value={item} key={`M${item}${index}`}>
          {item}
        </option>
      ))}
    </SelectBox>
  );
};

export default MobileSelect;

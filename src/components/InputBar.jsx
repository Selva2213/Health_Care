import React from "react";

const InputBar = ({
  labelName,
  forVal,
  typeVal,
  idVal,
  nameVal,
  value,
  handleChange,
  pattern,
  title
  // placeholder,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label
        className="text-[0.85rem] text-blue-500 font-500 text-left"
        htmlFor={forVal}
      >
        {labelName}
      </label>
      <input
        className="border-2 py-2 px-4 rounded-lg w-full"
        type={typeVal}
        id={idVal}
        name={nameVal}
        value={value}
        pattern={pattern}
        title={title}
        // placeholder={placeholder}
        onChange={(evt) => handleChange(evt)}
      />
    </div>
  );
};

export default InputBar;

import { useRef, useState } from "react";

const PasswordField = ({
  labelName,
  forVal,
  typeVal,
  idVal,
  nameVal,
  value,
  handleChange,
}) => {
  let [hidden, setHidden] = useState(true);
  let inpuRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    setHidden((hidden) => !hidden);
    inpuRef.current.type =
      inpuRef.current.type === "text" ? "password" : "text";
  };

  return (
    <div className="text-[0.8rem] text-gray-500 font-500 flex flex-col w-full">
      <div className="flex justify-between">
        <label className="text-[0.85rem] text-blue-500 font-500 text-left" htmlFor={forVal}>
          {labelName}
        </label>
        <button
        type="button"
          className="flex items-center justify-center"
          onClick={(e) => handleClick(e)}
        >
          <span className="material-symbols-outlined scale-[0.7]">
            {hidden ? "visibility" : "visibility_off"}
          </span>
          <p className="text-[0.7rem]">{hidden ? "Show" : "Hide"}</p>
        </button>
      </div>
      <input
        ref={inpuRef}
        className="border-2 py-2 px-4 rounded-lg w-full"
        type={typeVal}
        id={idVal}
        name={nameVal}
        value={value}
        onChange={(evt) => handleChange(evt)}
      />
    </div>
  );
};

export default PasswordField;

import clsx from "clsx";
import React from "react";

export const Input = ({
  label,
  type,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-medium pb-1">{label}</label>
      <input
        className={clsx(
          "w-full p-2 rounded-lg focus:outline-none placeholder:text-lg",
          className
        )}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const Textarea = ({
  label,
  className,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex w-full flex-col">
      <label className="font-medium pb-1">{label}</label>
      <textarea
        rows={5}
        value={value}
        className={clsx(
          "w-full p-2 rounded-lg focus:outline-none placeholder:text-lg",
          className
        )}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

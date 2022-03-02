import React, { cloneElement } from "react";
import clsx from "clsx";

export function TextField({ id, label, value, error }) {
  return (
    <div className="flex flex-col gap-2 bg-black">
      <label htmlFor={id} className="text-cyan-normal text-base">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          type="text"
          defaultValue={value}
          className={clsx(
            "w-full rounded-md p-2",
            "border border-slate-400 outline-none focus:ring",
            "text-cyan text-lg",
            error ? "focus:ring-red-500" : "focus:ring-cyan-focus"
          )}
        />
        {/* {icon && cloneElement(icon, { className: "absolute w-4 my-2 mx-4" })} */}
      </div>
    </div>
  );
}

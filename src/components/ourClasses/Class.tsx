import { IClass } from "@/share/types";
import React from "react";

const Class: React.FC<IClass> = ({ name, image, text }) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90
  `;
  return (
    <li className="relative mx-5 inline-block h-[380px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{text}</p>
      </div>
      <img className="w-[450px]" src={image} alt="" />
    </li>
  );
};

export default Class;

import React from "react";

interface IProps {
  children: React.ReactNode;
}

const HText: React.FC<IProps> = ({ children }) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  );
};

export default HText;

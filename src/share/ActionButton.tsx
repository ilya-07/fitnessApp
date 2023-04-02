import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../share/types";

interface IProps {
  children: React.ReactNode;
  setSelectedPage: (valuse: SelectedPage) => void;
}

const ActionButton: React.FC<IProps> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.Contact)}
      className="cursor-pointer rounded-md bg-secondary-500 px-10 py-2 duration-500 hover:bg-primary-500 hover:text-white"
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

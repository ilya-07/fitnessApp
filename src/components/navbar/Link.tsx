import { SelectedPage } from "@/share/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface IProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (el: SelectedPage) => void;
}

const Link: React.FC<IProps> = ({ page, selectedPage, setSelectedPage }) => {
  const loweCasePage = String(
    page.toLowerCase().replace(/ /g, "")
  ) as SelectedPage;
  return (
    <AnchorLink
      href={`#${loweCasePage}`}
      onClick={() => setSelectedPage(loweCasePage)}
      className={`${
        selectedPage === loweCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;

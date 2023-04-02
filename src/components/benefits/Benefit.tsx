import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../share/types";
import React from "react";
import { motion } from "framer-motion";

interface IProps {
  icon: JSX.Element;
  title: string;
  text: string;
  setSelectedPage: (el: SelectedPage) => void;
}

const Benefit: React.FC<IProps> = ({ icon, title, text, setSelectedPage }) => {
  return (
    <motion.article
      initial="start"
      whileInView="end"
      transition={{ duration: 0.5, delay: 0.15 }}
      variants={{
        start: {
          opacity: 0,
          y: -80,
          scaleX: 0.8,
        },
        end: {
          opacity: 1,
          y: 0,
          scaleX: 1,
        },
      }}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className=" my-3">{text}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={`#${SelectedPage.Contact}`}
      >
        <p>Learn ore</p>
      </AnchorLink>
    </motion.article>
  );
};

export default Benefit;

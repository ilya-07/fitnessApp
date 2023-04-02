import { IClass, SelectedPage } from "../../share/types";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import HText from "../../share/HText";
import Class from "./Class";
interface IProps {
  setSelectedPage: (el: SelectedPage) => void;
}
const classes: Array<IClass> = [
  {
    name: "Weight Trainig Class",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,  veniam. Eaque mollitia,",
    image: image1,
  },
  {
    name: "Fitness Class",
    image: image2,
  },
  {
    name: "Adventure Class",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,  veniam. Eaque mollitia,",
    image: image3,
  },
  {
    name: "ABS CoreClass",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,  veniam. Eaque mollitia,",
    image: image4,
  },
  {
    name: "Yoga Class",
    image: image5,
  },
  {
    name: "Weight Trainig Class",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,  veniam. Eaque mollitia,",
    image: image6,
  },
];
const OurClasses: React.FC<IProps> = ({ setSelectedPage }) => {
  return (
    <section
      className="w-full bg-primary-100 py-40"
      id={SelectedPage.OurClasses}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>our classes</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              veniam. Eaque mollitia, explicabo consectetur exercitationem quo
              veritatis reprehenderit deleniti! Exercitationem et distinctio
              temporibus incidunt eius!{" "}
            </p>
          </div>
        </motion.div>
        <div className=" mt-10 h-[353px]  w-full overflow-x-auto overflow-y-hidden  scrollbar scrollbar-track-transparent scrollbar-thumb-primary-300">
          <ul className="w-[2800px] whitespace-nowrap ">
            {classes.map((el: IClass, i) => (
              <Class {...el} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

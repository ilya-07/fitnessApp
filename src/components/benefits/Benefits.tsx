import { IBenefit, SelectedPage } from "../../share/types";
import React from "react";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "../../share/HText";
import Benefit from "./Benefit";
import ActionButton from "../../share/ActionButton";
interface IProps {
  setSelectedPage: (el: SelectedPage) => void;
}

const benefit: Array<IBenefit> = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's Diverce Classes",
    text: "amet consectetur adipisicing elit. Sed  delectus architecto unde laudantium incidunt neque velit pariatur voluptas odit sapiente.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State Of Art Facilities",
    text: "amet consectetur adipisicing elit. Sed  delectus architecto unde laudantium incidunt neque velit pariatur voluptas odit sapiente.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Exper And Pro Trainers",
    text: "amet consectetur adipisicing elit. Sed  delectus architecto unde laudantium incidunt neque velit pariatur voluptas odit sapiente.",
  },
];

const Benefits: React.FC<IProps> = ({ setSelectedPage }) => {
  return (
    <section
      className="mx-auto min-h-full w-5/6 py-20"
      id={SelectedPage.Benefits}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="start"
          whileInView="end"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            start: { opacity: 0, x: -20 },
            end: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>more than just a gym</HText>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
            delectus architecto unde laudantium incidunt neque velit pariatur
            voluptas odit sapiente.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefit.map((el: IBenefit, i) => (
            <Benefit key={i} {...el} setSelectedPage={setSelectedPage} />
          ))}
        </div>
        {/* GRAPHIC AND DESC */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="bebenfitPageGraphic"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractWaves">
                <motion.div
                  initial="start"
                  whileInView="end"
                  transition={{ duration: 0.5 }}
                  variants={{
                    start: { opacity: 0, x: -30 },
                    end: { opacity: 1, x: 0 },
                  }}
                  className="relative"
                >
                  <HText>
                    millions of happy members geting{" "}
                    <span className="text-primary-500">fit</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESC */}
            <motion.div
              initial="start"
              whileInView="end"
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                start: { opacity: 0, x: 15 },
                end: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit sint odio expedita ad soluta quasi, quaerat ullam. Unde
                totam commodi enim officia distinctio cupiditate laboriosam
                eveniet saepe aspernatur ab doloremque consequatur, soluta eius
                obcaecati? Ipsam eum delectus voluptatum repellendus neque.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi debitis qui iusto consequatur quaerat, laboriosam illo
                tenetur dignissimos sapiente eos impedit eius ipsa quia at
                tempore praesentium perferendis, obcaecati distinctio!
              </p>
            </motion.div>
            {/* BUTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkless">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

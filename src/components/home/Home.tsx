import { SelectedPage } from "../../share/types";
import React from "react";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "../../share/ActionButton";
import { motion } from "framer-motion";

interface IProps {
  setSelectedPage: (el: SelectedPage) => void;
}

const Home: React.FC<IProps> = ({ setSelectedPage }) => {
  const isAboveMediaScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id={SelectedPage.Home}
      className="md: gap-16 bg-gray-20 py-10  md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className=" before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homePAge" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              itaque modi similique? Ipsa assumenda reiciendis, aliquam atque
              non suscipit vero adipisci rerum delectus libero tenetur?
            </p>
          </motion.div>
          <motion.div
            initial="start"
            whileInView="end"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              start: {
                opacity: 0,
                x: -50,
              },
              end: {
                opacity: 1,
                x: 0,
              },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn ore</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="md: justify-centerz-10 flex basis-3/5 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediaScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="mx-auto flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="" />
              <img src={SponsorForbes} alt="" />
              <img src={SponsorFortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

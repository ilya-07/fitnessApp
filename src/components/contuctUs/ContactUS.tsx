import { SelectedPage } from "../../share/types";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
interface IProps {
  setSelectedPage: (el: SelectedPage) => void;
}
import COntactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import HText from "../../share/HText";
const ContactUs: React.FC<IProps> = ({ setSelectedPage }) => {
  const inputStyle =
    "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.prevenDefault();
    }
  };
  return (
    <section className="mx-auto w-5/6 pb-32 pt-24" id={SelectedPage.Contact}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">join now</span> to get in share
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            inventore odio nesciunt numquam accusantium aliquid expedita quae
            earum illum cum?
          </p>
        </motion.div>
        {/* FORM AND INAGE */}
        <div className="mt-5 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              method="POST"
              action="https://formsubmit.co/katacyri@mail.ru"
              target="_blank"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                {...register("name", { required: true, maxLength: 100 })}
                placeholder="NAME"
                className={inputStyle}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "this field is required"}
                  {errors.name.type === "maxLength" &&
                    "max length is 100 chart"}
                </p>
              )}
              <input
                type="email"
                required
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{4,}%/i,
                })}
                placeholder="EMAIL"
                className={inputStyle}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "this field is required"}
                  {errors.email.type === "pattern" && "invalid adress"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                {...register("message", { required: true, maxLength: 2000 })}
                placeholder="MESSAGE"
                className={inputStyle}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "this field is required"}
                  {errors.message.type === "maxLength" &&
                    "max length is 2000 chart"}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-evolvetext">
              <img
                className="relative z-[2] w-full"
                src={COntactUsPageGraphic}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

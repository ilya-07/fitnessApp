import React from "react";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            molestiae officia, exercitationem tempore rerum alias.
          </p>
          <p>Lorem ipsum@, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Some random text)</p>
          <p className="my-5">I'll become a frontend developer</p>
          <p>last link here</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contuct Us</h4>
          <p className="my-5">Enother random text)</p>
          <p>Believe me </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

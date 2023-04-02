import React from "react";

import Logo from "../../assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "./../../share/types";
import useMediaQuery from "./../../hooks/useMediaQuery";
import ActionButton from "../../share/ActionButton";
interface IProps {
  selectedPage: SelectedPage;
  setSelectedPage: (el: SelectedPage) => void;
  isTopOffSet: boolean;
}

const NavBar: React.FC<IProps> = ({
  isTopOffSet,
  selectedPage,
  setSelectedPage,
}) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveScreen = useMediaQuery("(min-width: 1060px)");
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const navBg = isTopOffSet ? "" : "bg-primary-300";
  return (
    <nav>
      <div className={`${flexBetween} ${navBg}  fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />
            {/* RIGHT SIDE */}
            {isAboveScreen ? (
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-8 text-sm`}>
                  <li>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                  <li>
                    <Link
                      page="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </li>
                </ul>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become A Mamber
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MODAL MENU - MOBILE */}
      {!isAboveScreen && menuToggle && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <ul className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <li>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

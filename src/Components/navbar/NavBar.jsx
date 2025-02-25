import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";
import Button from "../../UI/Button";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="py-4 px-10 mb-10 max-w-[1400px] w-[90%] bg-[#ffffff] w-[100vw] mx-auto flex justify-between">
        <Link to="/">
          <p className="text-[32px] text-blue font-[700]">{navbarList.logo}</p>
        </Link>
        <div>
          <ul className="hidden laptop:flex">
            {navbarList.navList.map(({ index, page, link }) => (
              <Link key={index}  to={link}>
                <li className="p-4 font-[700] mx-3">{page}</li>
              </Link>
            ))}
          </ul>
        </div>
        <Link className="hidden laptop:block" to={navbarList.appLink}>
          <Button text={navbarList.app} />
        </Link>

        <div
          className="flex flex-col justify-center laptop:hidden"
          onClick={() => setIsOpen(true)}
        >
          <div className="bg-blue h-[3px] w-[24px]" />
          <div className="bg-blue mt-[3px] h-[3px] w-[24px]" />
        </div>

        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default NavBar;

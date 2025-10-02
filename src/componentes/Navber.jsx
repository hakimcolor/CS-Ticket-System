import React, { useState } from 'react';
import NavMobile from './NavMobile';


const Navbar = () => {
  const [show, setIShow] = useState(false);

  return (
    <div className="bg-white shadow-md h-20  w-full z-50 fixed">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-20 px-5 md:px-0 ">
        <div className="font-bold text-xl sm:text-xl md:mr-5">
          CS — Ticket System
        </div>

        <ul className="hidden md:flex gap-6 items-center text-lg lg:text-xl">
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            Home
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            FAQ
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            Changelog
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            Blog
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            Download
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 border-purple-600">
            Contact
          </li>
          <button className="w-36 lg:w-40 h-10 lg:h-12 bg-gradient-to-br from-[#4800f1] to-[#9c60f1] rounded-xl text-white text-base lg:text-xl font-medium">
            <span className="font-bold text-white">+</span> New Ticket
          </button>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIShow(!show)}
            className="text-2xl font-bold focus:outline-none"
          >
            {show ? '✖' : '☰ '}
          </button>
        </div>
      </div>

      {show && <NavMobile></NavMobile>}
    </div>
  );
};

export default Navbar;

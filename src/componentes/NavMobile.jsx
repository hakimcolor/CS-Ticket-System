import React from 'react';

const NavMobile = () => {
  return (
    <div>
      <div className="md:hidden  p-4 rounded-bl-2xl shadow-lg absolute w-[30%] right-0   space-y-4 text-lg  bg-green-300/90 backdrop-blur-[100%] z-50 fixed">
        <ul className="flex flex-col gap-4">
          <li className="cursor-pointer hover:text-purple-600 hover:bg-gray-200 p-3 rounded-md transform duration-300">
            Home
          </li>
          <li className="hover:bg-gray-200 p-3 rounded-md cursor-pointer hover:text-purple-600  transform duration-300">
            FAQ
          </li>
          <li className="hover:bg-gray-200 p-3 rounded-md cursor-pointer hover:text-purple-600  transform duration-300">
            Changelog
          </li>
          <li className="hover:bg-gray-200 p-3 rounded-md cursor-pointer hover:text-purple-600  transform duration-300">
            Blog
          </li>
          <li className="hover:bg-gray-200 p-3 rounded-md cursor-pointer hover:text-purple-600  transform duration-300">
            Download
          </li>
          <li className="hover:bg-gray-200 p-3 rounded-md cursor-pointer hover:text-purple-600  transform duration-300">
            Contact
          </li>
          <button className="w-full h-12 bg-gradient-to-br from-[#4800f1] to-[#9c60f1] rounded-xl text-white text-lg font-medium cursor-pointer hover:opacity-80">
            <span className="font-bold text-white">+</span> New Ticket
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;

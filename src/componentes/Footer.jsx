import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div
        className="max-w-[1400px] mx-auto grid gap-8 
             2xl:grid-cols-5  xl:grid-cols-4 
               md:grid-cols-2 
                      grid-cols-1 px-4  "
      >
        <div>
          <h1 className="font-bold text-lg mb-3">CS — Ticket System</h1>
          <p className="text-gray-400 text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="2xl:ml-10 xl:ml-0">
          <h1 className="font-bold text-lg mb-3 ">Company</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Salad</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Services</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Information</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="font-bold text-lg mb-3">Social Link</h1>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaXTwitter className="text-3xl text-black hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@CS — Ticket System</span>
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaLinkedin className="text-3xl text-black hover:text-blue-800 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@CS — Ticket System</span>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaFacebookF className="text-black text-3xl hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@CS — Ticket System</span>
          </a>

          <a href="mailto:support@cst.com" className="flex gap-2 items-center">
            <HiOutlineMail className="text-black text-3xl hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">support@cst.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mt-10 border-t border-gray-200 pt-16 pb-8 px-6 lg:px-24">
      <div className="grid gap-12 md:grid-cols-4 text-gray-700">
        {/* Logo and Intro */}
        <div>
          <div className="text-3xl font-bold mb-4 text-blue-800">
             Interview<span className="text-black">AI</span>
          </div>
          <p className="text-sm text-gray-600">
            Prepare for your dream job with AI-powered mock interviews and smart coaching.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Mock Interviews</a></li>
            <li><a href="#" className="hover:text-blue-600">DSA Practice</a></li>
            <li><a href="#" className="hover:text-blue-600">Resume Review</a></li>
            <li><a href="#" className="hover:text-blue-600">Soft Skills</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
          <p className="text-sm mb-4">support@interviewai.com</p>
          <div className="flex gap-4 text-blue-800 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InterviewAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import catwikiLogo from "../../assets/images/CatwikiLogo.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between pl-40 bg-black self-center text-white p-4 h-[20vh] rounded-t-2xl w-[80%]">
      {/* Phần logo */}
      <div className="flex items-center">
        <img src={catwikiLogo} alt="CatWiki Logo" className="h-8 w-auto" />
      </div>

      {/* Phần thông tin bản quyền */}
      <div className="text-right text-sm">
        <p>
          &copy; {new Date().getFullYear()} created by{" "}
          <span className="font-semibold">vanhoang</span> - devChallenge.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;

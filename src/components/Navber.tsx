import { useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 w-full z-50 flex justify-center px-4  dark:text-white">
      <div className="bg-black/20 h-[90px] max-w-[1480px] w-full rounded-full backdrop-blur-sm border border-white/10 px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white text-base h-[42px]">
          {["Work", "About", "Blog", "Content"].map((item, index) => (
            <Link
              key={index}
              activeClass="active"
              smooth={true}
              spy={true}
              to={item.toLowerCase()}
              offset={-200}
              className="cursor-pointer px-4 py-2 hover:text-white/50 transition font-dm font-medium text-lg"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white/50 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[100px] bg-black/90 w-full rounded-xl max-w-[90%] text-white/50 p-6 md:hidden">
          {["Work", "About", "Blog", "Content", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                activeClass="active"
                smooth={true}
                spy={true}
                to={item.toLowerCase()}
                offset={-200}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-dm hover:text-white/80 transition"
              >
                {item === "Contact" ? (
                  <BsClipboardData className="inline" />
                ) : (
                  item
                )}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

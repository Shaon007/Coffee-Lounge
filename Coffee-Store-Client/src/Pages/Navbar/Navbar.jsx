import { Link } from "react-router-dom";
import { useState } from "react";
import cup from '../../assets/images/icons/cup.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div >
      <header className="bg-[#D2B48C] text-black shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center w-[220px]">
            <p className="  font-black">COFFEE  <span className="text-stone-200 italic">LOUNGE</span> </p>
            <img className="w-6 ml-2" src={cup} alt="image" />

          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <nav
            className={`${isMenuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full  bg-[#D2B48C] md:bg-transparent md:static md:flex md:items-center md:space-x-6 font-semibold text-base lg:text-lg z-10 shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col mx-auto items-center md:flex-row md:space-x-4">
              <li className="p-3 md:p-5 xl:p-8 active">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="p-3 md:p-5 xl:p-8">
                <Link to="/aboutUs" onClick={() => setIsMenuOpen(false)}>
                  <span>About Us</span>
                </Link>
              </li>
              <li className="p-3 md:p-5 xl:p-8">
                <Link to="/addcoffee" onClick={() => setIsMenuOpen(false)}>
                  <span>Add Coffee</span>
                </Link>
              </li>

              <li className="p-3 md:p-5 xl:p-8">
                <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>
                  <span>Blogs</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          {/* <button className="hidden w-[120px] text-lg md:block rounded-full font-bold  p-2">
            Contact
          </button> */}
          <Link to="/contact" className="hidden w-[120px] text-lg md:block rounded-full font-bold  p-2">Contact</Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

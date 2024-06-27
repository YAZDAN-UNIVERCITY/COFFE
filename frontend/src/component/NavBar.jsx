// Navbar.js
import React, { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="fixed top-0 z-50 left-0 w-full flex justify-between h-16 p-2 bg-accent  shadow-md ">
      <div className="w-1/2">
        <div className="flex justify-between items-center h-full px-4">
          <Link to="/" className="flex items-center gap-[10px]">
            <FaCoffee className="text-[30px]" />
            <h1 className="text-2xl font-bold">کافی شاپ</h1>
          </Link>

          <div className="flex gap-[20px]">
            {user ? (
              <div className="flex py-5">
                <p className="text-sm">{user.username}</p>
                <button
                  className="bg-accent text-white px-4 py-2 rounded"
                  onClick={handleLogout}
                >
                  خروج
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-sm">
                ورود
              </Link>
            )}
            <div className="py-5">
              <Link
                to="/cart"
                className="text-white hover:text-accent duration-300"
              >
                سبد خرید ({cart.length})
              </Link>
            </div>
            <div className="py-5">
              <Link
                to="/purchase-records"
                className="text-white hover:text-accent duration-300"
              >
                سوابق خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center cursor-pointer ${nav ? "hidden" : ""}`}
      >
        <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
      </div>
      {nav && (
        <div className="fixed top-0 right-0 w-64 h-screen  shadow-md">
          <AiOutlineClose
            size={30}
            onClick={() => setNav(!nav)}
            className=" cursor-pointer absolute right-4 top-4"
          />
          <div className="flex flex-col  gap-[40px] p-4">
            <h2 className="text-2xl font-bold">کافی شاپ</h2>
            <ul className="flex flex-col text-right ">
              <li className="py-5 border-b  border-accent">
                <Link
                  to="#"
                  className="text-white hover:text-accent duration-300"
                >
                  نوشیدنی های سرد
                </Link>
              </li>
              <li className="py-5 border-b border-accent">
                <Link
                  to="#"
                  className="text-white hover:text-accent duration-300"
                >
                  نوشیدنی های گرم
                </Link>
              </li>
              <li className="py-5 border-b border-accent">
                <Link
                  to="#"
                  className="text-white hover:text-accent duration-300"
                >
                  انواع چای ها
                </Link>
              </li>
              <li className="py-5">
                <Link
                  to="#"
                  className="text-white hover:text-accent duration-300"
                >
                  شیرینی ها
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

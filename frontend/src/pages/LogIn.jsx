import React,{useState} from "react";
import { Link } from "react-router-dom";
function LogIn() {
  return (
    <div className="flex-center w-screen h-screen">
      <section className="    w-[350px]">
           <div className="mb-12 w-full   ">
            <form className=" max-w-md mx-auto p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign in </h2>

               
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Username or Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username or Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            
              <button
                className="w-full px-4 py-2 font-bold text-white bg-accent hover:bg-primary-600 rounded shadow"
                type="submit"
              >
                Sign in
              </button>
              <Link to="/signup" className="text-white duration-300 hover:text-accent my-8 text-sm">ثبت نام</Link>
            </form>
         </div>
      </section>
    </div>
  );
}

export default LogIn;

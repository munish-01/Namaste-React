import { useEffect, useState } from "react";
// import logo from "../assets/logo-main.png"
const logoUrl = new URL("../assets/logo-main.png", import.meta.url).href;
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header render");

  const onlneStaus = useOnlineStatus()

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  return (
    <div className="flex justify-between h-[100px] bg-slate-400  shadow-lg rounded-md sm:bg-yellow-50 lg:bg-green-50  ">
      <div className="flex">
        <Link to="/">
          <img className="w-30 " src={logoUrl} />
          {/* <h3 className="ml-20">Ghar ka khana</h3> */}
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-9 m-9  ">
        <li className="px-4 py-4">Online Status: {onlneStaus ? "✅" : "⛔"}</li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
           <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="px-4 bg-slate-50 hover:bg-slate-600  py-4 rounded-xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

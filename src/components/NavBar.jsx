import { useState } from "react";
import logo from "../assets/favicon.png";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { RiMenuFoldFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toogleDrakMode } from "../redux/features/darkModeSlice";
import DarkModeWhite from "../assets/dark-mode.png"
import DarkModeBlack from "../assets/dark-modeDark.png"
import useLocalStorageGetItem from "../../hooks/useLocalStorageGetItem";
import { Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state)=> state.darkMode.value);

  const onSigin = () => {
    navigate("/login");
  };

  const user = useLocalStorageGetItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const items = [
    {
      key: "1",
      label: <p onClick={logout}>Logout</p>,
    },
    {
      key: "2",
      label: <p onClick={() => navigate("/bookmarks")}>Bookmarks</p>,
    },
  ];


  return (
    <>
      <div className="flex flex-row justify-between border-b-[3px] border-applightgreen mb-10 max-w-commonwidth mx-auto ">
        <div>
          <img
            src={logo}
            alt=""
            className=" h-[100px] -mb-4 -mt-2  object-cover"
          />
        </div>
        <div className=" xsm:hidden sm:flex flex flex-row gap-[40px]  items-center">
          <Link className="text-appgreen no-underline ">Contact Us</Link>
          {user ? (
            <Dropdown
              className="min-w-[200px] "
              menu={{
                items,
              }}
            >
              <p className="flex gap-2 items-center justify-center text-appgreen capitalize">
                <p>{user}</p>
                <FaAngleDown />
              </p>
            </Dropdown>
          ) : (
            <PrimaryButton title={"Sign In"} width={"80px"} onClick={onSigin} />
          )}
          <img
            src={darkMode ? DarkModeWhite : DarkModeBlack}
            onClick={()=> {
              localStorage.setItem("darkMode", !darkMode);
              dispatch(toogleDrakMode())}
            }
            className="w-[30px] h-[30px] cursor-pointer"
            alt=""
          />
        </div>
        <div className="xsm:flex sm:hidden items-center justify-center text-appgreen">
          <RiMenuFoldFill
            onClick={() => setMobileMenuShow((prev) => !prev)}
            size={40}
          />
        </div>
      </div>
      {mobileMenuShow && (
        <div className="bg-white shadow-lg max-w-commonwidth mx-auto h-[60px]  relative top-[-45px] flex flex-row justify-around items-center xsm:flex sm:hidden">
          <Link className="text-appgreen no-underline ">Contact Us</Link>
          <PrimaryButton title={"Sign In"} width={"80px"} onClick={() => {}} />
          <img
            src={darkMode ? DarkModeWhite : DarkModeBlack}
            className="w-[30px] h-[30px] cursor-pointer"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default NavBar;
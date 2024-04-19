import React, { useEffect } from "react";
import "./CSS.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import shop from "../images/shopping-bag.png"
function Header() {
  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeBackGround = () => {
    if (window.scrollY >= 64) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeBackGround);

  return (
      
       <div >
    <div
      className={
        color
          ? "header-active flex justify-center items-center z-10 h-20 bg-white left-0 right-0 shadow p-3 mb-5 fixed"
          : "header-nonactive flex justify-center items-center z-10 h-20 bg-transparent left-0 right-0 fixed"
      }
    >

      <div className="container-md flex justify-content-center 
      items-center z-10 h-16 bg-transparent left-0 right-0 fixed">
        {/* h16 64px */}
        <Link to="/">
          <img
            className="grab-logo max-w-[170px]"
            src="https://food.grab.com/static/images/logo-grabfood2.svg"
            alt="grab-logo"
          />
        </Link>
        <div className="btn-group">
          <button type="button" class="btn btn-light shopping-bag">
            <img src={shop} alt="bag" srcset="" />
          </button>
          <button type="button" class="btn btn-light ">
            Đăng nhập/Đăng ký
          </button>
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            VI
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
            </ul>
          </button>
        </div>
        </div>
   
   </div>
    </div>
  );
}
export default Header;

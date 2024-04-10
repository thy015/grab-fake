import React, { useEffect } from "react";
import "./CSS.css";
import { useState } from "react";


function Header() {
  //change nav color when scrolling
  const[color,setColor]=useState(false)
  const changeBackGround=()=>{
   if(window.scrollY>=70){
    setColor(true)
   }else{
    setColor(false)
   }
  }
  window.addEventListener("scroll",changeBackGround)

  return (
    <div className={color ? "shadow p-3 mb-5 rounded container-header active":"container-header"}>
    <div className="container-sm d-flex justify-content-between align-items-center">
      <img
        className="grab-logo"
        src="https://food.grab.com/static/images/logo-grabfood2.svg"
        alt="grab-logo"
      />
      <div className="btn-group">
        <button type="button" class="btn btn-light ">
          <img src="./src/assets/shopping-bag.png" alt="bag" srcset="" />
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
  );
}
export default Header;

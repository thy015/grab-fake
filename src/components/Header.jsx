import React, { useEffect } from "react";
import "./CSS.css";
import { useState } from "react";


function Header() {
  const[header,setHeader]=useState(false)
  return (
    <div className="container-header container-sm">
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
  );
}
export default Header;

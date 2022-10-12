import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="nav__logo"
        />
        <img
          onClick={() => history("/profile")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinkpaEjVFBcW2Qp3MUAlHf3FhFSeMs728b3epQ3J4K95o37SuG_WeFTCj0fPI9z0RVdE&usqp=CAU"
          alt="Avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;

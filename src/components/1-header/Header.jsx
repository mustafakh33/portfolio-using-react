import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";



const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode")|| "dark");
  useEffect(()=>{
    if(theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  },[theme])
  return (
    <div className="container">
      <header className="flex">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="menu icon-menu flex"
        />

        <div />

        <nav>
          <ul className="flex">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <button
        onClick={()=>{
          // send value to localStorage
          localStorage.setItem("currentMode", theme==="dark"?"light":"dark")
          //get value from localStorage
          setTheme(localStorage.getItem("currentMode"))
        }}
         className="mode flex">
          <span className={`${theme==="light"?"icon-sun" : "icon-moon-o" }`}></span>
        </button>

        {showModal && (
          <div className="fixed">
            <ul className="modal ">
              <li>
                <button
                  className="icon-close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

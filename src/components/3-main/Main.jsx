import { useState } from "react";
import "./main.css";
import {myprojects} from "./myProjects"
import { animate, transform } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const Main = () => {
  const [arr, setArr] = useState(myprojects);
  const [currentActive, setCurrentActive] = useState("all");
  const handleClick = (buttonCategory) => {
              setCurrentActive(buttonCategory);
              const newArry = myprojects.filter((item)=>{
                const zzz = item.category.find((myItem)=>{
                  return myItem === buttonCategory; 
                });
                return zzz;
              });
              setArr(newArry);
  }
  return (
    <>
       <div className="container" id="projects">
      <main className="flex">
        <section className="left-section">
          <button
            onClick={() => {
              handleClick("all");
            }}
            className={currentActive === "all" ? "active" : ""}
          >
            all projects
          </button>
          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : ""}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => {
              handleClick("javascript");
            }}
            className={currentActive === "javascript" ? "active" : ""}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              handleClick("bootstrap");
            }}
            className={currentActive === "bootstrap" ? "active" : ""}
          >
            Bootstrap
          </button>
          <button
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : ""}
          >
            React & MUI
          </button>
          
        </section>

        <section className="flex right-section">
        <AnimatePresence>

        
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)"}}
                animate={{ transform: "scale(1)"}}
                transition={{type: "spring", damping: 8 , stiffness: 50}}
        
              key={item.imgPath} className="border card">
                <img width={266} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="Sub-title">
                    {item.Subtitle}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <Link to={item.link}><div className="icon-link"></div></Link>
                      <Link to={item.github}><div className="icon-github"></div></Link>
                    </div>
                    <a className="link" href="">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
          </AnimatePresence>
        </section>
      </main>
    </div>
    <div className="divider" />
    </>
 
  );
};

export default Main;

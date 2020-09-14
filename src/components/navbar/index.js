import React from "react";
import './navbar.css';


export default function navbar() {


  return (
   <nav className=" p-1">
       
    <div className="float-right" >
    <ul id="nav" className="navbaar ">
        <a href="/"><li> Home</li></a>
         <a href="/services"><li> Services</li></a>
        <a href="/projects"><li> Projects</li></a>
        <a href="/contact"><li> Contact</li></a>
        <a href="/about"><li> About</li></a>        
    </ul>
    </div>
    <div className="hide-full">
     <div className="headeri" />
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1" />
          <div className="spinner horizontal" />
          <div className="spinner diagonal part-2" />
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
        <a href="/"><li> Home</li></a>
        <a href="/services"><li> Services</li></a>
        <a href="/projects"><li> Projects</li></a>
        <a href="/contact"><li> Contact</li></a>
        <a href="/about"><li> About</li></a>    
          </ul>
        </div>
        </div>
    </nav>
  );
}

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav 
    className={`${styles.paddingX} w-full flex items-center
    py-5 fixed top-0 z-20 bg-black border-b border-teal-300` }
    >
      <div className="w-full flex justify-between items-center 
      max-w-7xl mx-auto">
        <Link
        className='flex items-center gap-2' 
        to={"/"}
        onClick = {()=>
          {
            setActive("");
            window.scrollTo(0, 0); //scroll to top
          }
        }
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain rounded-full'  />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Sudip &nbsp;
            <span className='md:block hidden'> | Portfolio </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex 
        flex-row gap-10'>
          {
            navLinks.map((link)=>(
              <li key={link.id}
              className = {`${
                active === link.title &&
                "text-white"
              } hover:text-teal-500 text-[18px]
              font-medium cursor-pointer `}
              onClick = {()=>{setActive(Link.title)}}
              >
                <a href={`#${link.id}`} > {link.title} </a>
              </li>
            ))
          }
        </ul>

        {/* mobile Menu */}
        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px]
          object-contain cursor-pointer'
          onClick={()=>{setToggle(!toggle)}} />
          <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2
          min-w-[140px] z-10 rounded-xl`}>
             <ul className='list-none flex items-start  
        justify-end flex-col gap-4 '>
          {
            navLinks.map((link)=>(
              <li key={link.id}
              className = {`${
                active === link.title &&
                "text-black"
              } font-medium text-[16px]
              font-poppins cursor-pointer `}
              onClick = {()=>{
                setActive(Link.title);
                setToggle(!toggle);
              }}
              >
                <a
                className='text-black' 
                href={`#${link.id}`} > {link.title} </a>
              </li>
            ))
          }
        </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
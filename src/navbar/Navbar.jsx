import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import "./navbar.css"
import { FaHome, FaBars } from "react-icons/fa"
import { BiLogIn, BiSearch } from "react-icons/bi"
import { NavLink } from "react-router-dom"


const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <BiLogIn />
  }
]

const Navbar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opecity: 0,
      transition: {
        duration: 0.2
      }
    },
    show: {
      width: "160px",
      padding: "5px 10px",
      opecity: 1,
      transition: {
        duration: 0.2
      },
    }
  }

  const linkTextAnimation = {
    hidden: {
      width: 0,
      opecity: 0,
      transition: {
        duration: 0.2
      }
    },
    show: {
      width: "auto",
      opecity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVarient, setCursorVarient] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12
    },
    big: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32
    }
  }

  const enterText = () => setCursorVarient("big")
  const leaveText = () => setCursorVarient("default")

  return (

    <div className="main-container" >
      <motion.div className='cursor' variants={variants} animate={cursorVarient} />
      <motion.div animate={{
        width: isOpen ? "200px" : "40px", transition: {
          duration: 0.5,
          type: "spring",
          damping: 11
        }
      }} className="sidebar">
        <div className="top_section">
          {isOpen && <motion.h1 className="logo" initial="hidden" animate="show" exit="hidden" variants={linkTextAnimation} onMouseEnter={enterText} onMouseLeave={leaveText}>GOD E-SPORTS</motion.h1>}
          <div className="bars"><FaBars onClick={toggle} /></div>
        </div>
        <div className="search">
          <div className="search_icon"><BiSearch /></div>
          <AnimatePresence>
            {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} type="text" placeholder="Search" />}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link" activeClassName="active" >
              <div className="icon">{route.icon}</div>
              <AnimatePresence >
                {isOpen && <motion.div variants={linkTextAnimation} initial="hidden" animate="show" exit="hidden" className="link_name">{route.name}</motion.div>}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <motion.div animate={{ width: isOpen ? "200px" : "40px" }} className="sidebar-back"></motion.div>
      <main className="main">{children}</main>
    </div>
  )
}

export default Navbar
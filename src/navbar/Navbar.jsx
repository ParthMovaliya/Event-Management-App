// import React, { useState, useEffect } from 'react'
// import { AnimatePresence, motion } from "framer-motion"
// import "./navbar.css"
// import { FaHome, FaBars } from "react-icons/fa"
// import { BiLogIn, BiSearch } from "react-icons/bi"
// import { NavLink } from "react-router-dom"


// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     icon: <FaHome />,
//   },
//   {
//     path: "/login",
//     name: "Login",
//     icon: <BiLogIn />
//   }
// ]

// const Navbar = ({ children }) => {

//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const [menuBtn, setMenuBtn] = useState(false);
//   const togglebtn = () => setMenuBtn(!menuBtn);

//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opecity: 0,
//       transition: {
//         duration: 0.2
//       }
//     },
//     show: {
//       width: "150px",
//       padding: "5px 10px",
//       opecity: 1,
//       transition: {
//         duration: 0.2
//       },
//     }
//   }
//   const inputAnimation_600 = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opecity: 0,
//       transition: {
//         duration: 0.2
//       }
//     },
//     show: {
//       width: "100%",
//       // padding: "5px 10px",
//       opecity: 1,
//       transition: {
//         duration: 0.1
//       },
//     }
//   }

//   const linkTextAnimation = {
//     hidden: {
//       width: 0,
//       opecity: 0,
//       transition: {
//         duration: 0.2
//       }
//     },
//     show: {
//       width: "auto",
//       opecity: 1,
//       transition: {
//         duration: 0.2
//       }
//     }
//   }

//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0
//   });
//   const [cursorVarient, setCursorVarient] = useState("default")

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       })
//     }
//     window.addEventListener("mousemove", mouseMove)
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     }
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 12,
//       y: mousePosition.y - 12
//     },
//     big: {
//       height: 64,
//       width: 64,
//       x: mousePosition.x - 32,
//       y: mousePosition.y - 32
//     }
//   }

//   const enterText = () => setCursorVarient("big")
//   const leaveText = () => setCursorVarient("default")

//   return (

//     <div className="main-container" >
//       <div className='left_lr_split'>
//         <motion.div className='cursor' variants={variants} animate={cursorVarient} />
//         <motion.div animate={{
//           width: isOpen ? "200px" : "40px", transition: {
//             duration: 0.5,
//             type: "spring",
//             damping: 11
//           }
//         }} className="sidebar">
//           <div className="top_section">
//             {isOpen && <motion.h1 className="logo" initial="hidden" animate="show" exit="hidden" variants={linkTextAnimation} onMouseEnter={enterText} onMouseLeave={leaveText}>GOD E-SPORTS</motion.h1>}
//             <div className="bars" cla><FaBars onClick={toggle} /></div>
//           </div>
//           <div className="search">
//             <div className="search_icon"><BiSearch /></div>
//             <AnimatePresence>
//               {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} type="text" placeholder="Search" />}
//             </AnimatePresence>
//           </div>
//           <section className="routes">
//             {routes.map((route) => (
//               <NavLink to={route.path} key={route.name} className="link" activeClassName="active" >
//                 <div className="icon">{route.icon}</div>
//                 <AnimatePresence >
//                   {isOpen && <motion.div variants={linkTextAnimation} initial="hidden" animate="show" exit="hidden" className="link_name">{route.name}</motion.div>}
//                 </AnimatePresence>
//               </NavLink>
//             ))}
//           </section>
//         </motion.div>
//         <motion.div animate={{
//           width: isOpen ? "200px" : "40px"
//         }} className="sidebar-back"></motion.div>
//       </div>
//       {/* ====================================sz600==================================== */}
//       {/* <div> */}
//           <div className='sz600'>
//             {!menuBtn && <div className='logo_sz600'><FaBars onClick={togglebtn} className='menu_sz600' /></div>}
//             <dir className='name_sz600'>GOD E-SPORTS</dir>
//           </div>
//           {1 && <motion.div animate={{
//             width: !menuBtn ? "0px" : "200px", transition: {
//               duration: 0.5,
//               type: "spring",
//               damping: 11
//             }
//           }} className="sidebar">
//             <div className="top_section">
//               {menuBtn && <motion.h1 className="logo" initial="hidden" animate="show" exit="hidden" variants={linkTextAnimation} onMouseEnter={enterText} onMouseLeave={leaveText}>GOD E-SPORTS</motion.h1>}
//               {menuBtn && <div className="bars"><FaBars onClick={togglebtn} /></div>}
//             </div>
//             <motion.div initial="hidden" animate="show" exit="hidden" variants={inputAnimation_600} className="search">
//               {menuBtn && <div className="search_icon"><BiSearch /></div>}
//               <AnimatePresence>
//                 {menuBtn && <input type="text" placeholder="Search" className='seatchtxt_sz600' />}
//               </AnimatePresence>
//             </motion.div>
//             {1 && <motion.section initial="hidden" animate="show" exit="hidden" variants={inputAnimation_600} className="routes">
//               {menuBtn && routes.map((route) => (
//                 <motion.div initial="hidden" animate="show" exit="hidden" variants={inputAnimation_600}>
//                   <NavLink to={route.path} key={route.name} className="link" activeClassName="active" >
//                     <div className="icon">{route.icon}</div>
//                     <AnimatePresence >
//                       {menuBtn && <motion.div variants={linkTextAnimation} initial="hidden" animate="show" exit="hidden" className="link_name">{route.name}</motion.div>}
//                     </AnimatePresence>
//                   </NavLink>
//                 </motion.div>
//               ))}
//             </motion.section>}
//           </motion.div>}
//         {/* </div> */}
//         {/* ====================================sz600 Done==================================== */}
//       <div className='right_lr_split'>
        
//         <div>
//           <main className="main">{children}</main>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React,{ useState } from 'react'
import "./login.css"
import { CSSTransition } from "react-transition-group"
import Card from "./Card"
import { motion } from 'framer-motion'

const dropIn = {
  // hidden: {
  //     y: "-100vh",
  //     opacity: 0,
  // },
  // visible: {
  //     y: "0",
  //     opacity: 1,
  //     transition: {
  //         duration: 0.1,
  //         type: "spring",
  //         damping: 25,
  //         stiffness: 500,
  //     },
  // },
  // exit: {
  //     y: "100vh",
  //     opacity: 0,
  // }
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    }
  }
}

const Login = () => { 

  const [showFront, setShowFront] = useState(true);
    return(
        <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className="login_page">
          <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
        </motion.div>
    );

}

export default Login


// {/* ====================================sz600==================================== */}
// <div className='sz600'>
// {!menuBtn && <div className='logo_sz600'><FaBars onClick={togglebtn} className='menu_sz600' /></div>}
// <dir className='name_sz600'>GOD E-SPORTS</dir>
// </div>
// {1 && <motion.div animate={{
// width: !menuBtn ? "0px" : "200px", transition: {
//   duration: 0.5,
//   type: "spring",
//   damping: 11
// }
// }} className="sidebar">
// <div className="top_section">
//   {menuBtn && <motion.h1 className="logo" initial="hidden" animate="show" exit="hidden" variants={linkTextAnimation} onMouseEnter={enterText} onMouseLeave={leaveText}>GOD E-SPORTS</motion.h1>}
//   {menuBtn && <div className="bars"><FaBars onClick={togglebtn} /></div>}
// </div>
// <motion.div initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="search">
//   {menuBtn && <div className="search_icon"><BiSearch /></div>}
//   <AnimatePresence>
//     {menuBtn && <input type="text" placeholder="Search" className='seatchtxt_sz600' />}
//   </AnimatePresence>
// </motion.div>
// {1 && <motion.section initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="routes">
//   {menuBtn && routes.map((route) => (
//     <motion.div initial="hidden" animate="show" exit="hidden" variants={inputAnimation}>
//       <NavLink to={route.path} key={route.name} className="link" activeClassName="active" >
//       <div className="icon">{route.icon}</div>
//       <AnimatePresence >
//         {menuBtn && <motion.div variants={linkTextAnimation} initial="hidden" animate="show" exit="hidden" className="link_name">{route.name}</motion.div>}
//       </AnimatePresence>
//     </NavLink>
//     </motion.div>
//   ))}
// </motion.section>}
// </motion.div>}
// {/* ====================================sz600 Done==================================== */}
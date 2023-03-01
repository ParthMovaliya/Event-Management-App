import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from "react-router-dom"
// import { FaHome } from "react-icons/fa"
// import { BiLogIn } from "react-icons/bi"

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         icon: <FaHome />,
//     },
//     {
//         path: "/login",
//         name: "Login",
//         icon: <BiLogIn />
//     }
// ]

const Nav = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    const changeOpen = () => setOpen(!isOpen);

    return (
        <div>
            <nav>
                <div className='lines' onClick={changeOpen}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {/* <div className='seen'> */}
                    <div className='navbar_content'>
                        <div className={isOpen ? 'reTitle title' : "title" }>GOD E-SPORTS</div>
                        <div className={isOpen ? 'open hamburger' : 'hamburger'}>
                            <NavLink className="navLink" to="/" key="Home" onClick={changeOpen}> <div>Home</div> </NavLink>
                            <NavLink className="navLink" to="/login" key="Login" onClick={changeOpen}> <div>Login</div> </NavLink>
                        </div>
                    </div>

                {/* </div> */}
            </nav>
            <div className='child'>
                <main className="main">{children}</main>
            </div>
        </div>
    )
}

export default Nav
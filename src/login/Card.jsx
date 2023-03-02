import "./card.css";
import { motion } from 'framer-motion'

function Card({ onClick }) {
    return (
        <div className="card" >
            <div className="card-front">
                <h1>Login</h1>
                <form action="" className='login_form'>
                    <div className='login_details'>
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="password" name="" id="" placeholder='Password' />
                        <button type="submit">Login</button>
                    </div>
                    <div className='login_register'>
                        <label>Register?</label>
                        <motion.label whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flip-card-btn" onClick={onClick}>Register</motion.label>
                    </div>
                </form>
            </div>
            <div className="card-back">
                <h1>Register</h1>
                <form action="" className='login_form'>
                    <div className='login_details'>
                        <input type="text" name="" id="" placeholder="Name" />
                        <input type="text" name="" id="" placeholder="Surname" />
                        <input type="text" name="" id="" placeholder="Player Name" />
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="password" name="" id="" placeholder='Password' />
                        <input type="password" name="" id="" placeholder='Re-Password' />
                        <button type="submit">Register</button>
                    </div>
                    <div className='login_register'>
                        <label>Already Login</label>
                        <motion.label onClick={onClick} whileHover={{ scale: 1.1 }} className="flip-card-btn" whileTap={{ scale: 0.9 }}>Login</motion.label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Card;
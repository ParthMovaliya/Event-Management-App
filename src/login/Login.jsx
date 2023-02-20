import React,{useState} from 'react'
import "./login.css"
const Login = () => {

    const [lgn,setLgn] = useState(true);

    return (
        <div className='login__page'>

            <div className= {lgn?`login`:`hidden__form`} >
                <h1>Login</h1>
                <form action="" className='login__form' onSubmit={(event)=>event.preventDefault()} >
                    <input type="email" name="email" id="" placeholder='email'></input>
                    <input type="password" name="password" id="" />
                    <button type="submit">Login</button>
                    <div className='login__submit'>
                        <label>No Account</label>
                        <button type="submit" onClick={()=>setLgn(!lgn)}>Sign UP</button>
                    </div>
                </form>
            </div>

            <div className= {!lgn?`signup`:`hidden__form`}>
                <h1>Sign Up</h1>
                <form action="" className='signup__form' onSubmit={(event)=>event.preventDefault()} >
                    <div className='row__signup'>
                        <input type="text" name="name" id="" placeholder='Name' className='element__signup' />
                        <input type="text" name="name" id="" placeholder='Surname' className='element__signup' />
                    </div>
                    <input type="email" name="email" id="" placeholder='email'></input>
                    <div className='row__signup'>
                        <input type="password" name="password" id="" placeholder='PassWord' className='element__signup' />
                        <input type="password" name="password" id="" placeholder='Re-PassWord' className='element__signup' />
                    </div>
                    <input type="date" name="dob" id="" placeholder='Date Of Birth' />
                    <button type="submit">Sign Up</button>
                    <div className='signup__submit'>
                        <label>Have Account?</label>
                    <button type="submit" onClick={()=>setLgn(!lgn)}>Login</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Login
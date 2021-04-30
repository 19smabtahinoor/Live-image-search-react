import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function Login(){
    return (
        <>
        <div className="form_container">
            <div className="form_wrapper">
                <div className="form_heading">
                     <img src="https://i.ibb.co/gvQH0Mr/unsplash.png" alt="logo" width="150px"/>
                    <h1>Login</h1>
                    <span>Welcome back</span>
                </div>

                <form className="form">

                    <label htmlFor="email" className="useremails">Email Address</label>
                    <input type="email" id="email"/>

                    <label htmlFor="password" className="userpassword">Password</label>
                    <input type="password" id="password"/>

                    <Button className="join">Login</Button>

                    <span className="account_create_text">Don't have an account?</span><Link exact="true" to="/join" className="join_sub_text">Join</Link>
  

                    <Link exact="true" to="/" className="backtohometext">Back to home</Link>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login
import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function Join(){
    return (
        <>
        <div className="form_container">
            <div className="form_wrapper">
                <div className="form_heading">
                    <h1>Join Unsplash</h1>
                    <span>Already have an account?</span>
                </div>

                <form className="form">

                    <label htmlFor="fName" className="firstName">First Name</label>
                    <input type="text" id="fName"/>

                    <label htmlFor="lName" className="LastName">Last Name</label>
                    <input type="text" id="lName"/>

                    <label htmlFor="email" className="useremails">Email Address</label>
                    <input type="email" id="email"/>

                    <label htmlFor="username" className="userNames">Username</label>
                    <input type="text" id="username"/>

                    <label htmlFor="password" className="userpassword">Password</label>
                    <input type="password" id="password"/>

                    <Button className="join">Join</Button>

                    <Link exact="true" to="/" className="backtohometext">Back to home</Link>
                </form>
            </div>
        </div>
        </>
    )
}
export default Join
import React from 'react';
import './Signup.css';
import { FaRegUser } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";



function Signup() {


    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign In</h1>

                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaRegUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Admission no' required />
                    <GiArchiveRegister className='icon' />

                </div>

                <button type="submit">Sign In</button> 
              
               

            </form>
            
         </div>
        
    );
}

export default Signup;
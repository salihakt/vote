import React, { useState } from 'react';
import "./Register.css";
import axios from 'axios';





function Register() {

    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        gender:'',
        course:'',
        position:'',
        photo:'',
        about:''

    })
    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[ e.target.value] });

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            console.log(values)
        
    }

    const ResetFun = () => {
        setValues({firstname: '', lastname: '', email: ''})
    }

    return (
        <div className="container">
            <h1>Register here</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name*</label>
                <input tpe="text" placeholder="Enter First Name" name="firstname"
                onChange={(e) => handleChanges(e)} required value={values.firstname}/>

                <label htmlFor="lastname">Last Name*</label>
                <input tpe="text" placeholder="Enter Last Name" name="lastname"
                 onChange={(e) => handleChanges(e)} required value={values.lastname}/>

                <label htmlFor="email">Email*</label>
                <input tpe="email" placeholder="Enter Email" name="email"
                 onChange={(e) => handleChanges(e)} required value={values.email}/>

                <label htmlFor="contact">Contact*</label>
                <input tpe="text" placeholder="Enter Phone #" name="contact"
                 onChange={(e) => handleChanges(e)}/>
            
                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender"
                 onChange={(e) => handleChanges(e)}/> Male
                <input type="radio" name="gender"
                 onChange={(e) => handleChanges(e)}/> Female

                <label htmlFor="course">Course</label>
                <select name="course" id="course" onChange={(e) => handleChanges(e)}>
                    <option value="bca">BCA</option>
                    <option value="bsc">BSC</option>
                    <option value="bcom">BCOM</option>
                </select>

                <label htmlFor="position">Position</label>
                <select name="position" id="position" onChange={(e) => handleChanges(e)}>
                     <option value="vice">Vice</option>
                     <option value="sub">Sub</option>
                </select>

                <label htmlFor="photo">Upload Photo</label>
                <input type="file" placeholder="Upload Photo" onChange={(e) => handleChanges(e)}/>

                <label htmlFor="about">About</label>
                <textarea name="about" id="about" cols={3} rows={10}
                 onChange={(e) => handleChanges(e)} placeholder="Enter description"></textarea>

                <button type="button" onClick={ResetFun}>Reset</button>
                <button type="submit">Submit</button>

            </form>

        </div>
    );
}

export default Register;
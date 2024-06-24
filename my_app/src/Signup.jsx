import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password, gender, age })
            .then(result => {console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email input Fiels */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="Email" placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password input field */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password"
                            autoComplete="off" name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* gender */}
                    <div className="mb-3">
                        <label htmlFor="gender">
                            <strong>Gender</strong>
                        </label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="Male" 
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> 
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="Female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2"> 
                                Female
                            </label>
                        </div>
                    </div>
                    {/* Age input Field */}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Age</strong>
                        </label>
                        <input type="Number"
                            placeholder="Enter Age"
                            autoComplete="off"
                            name="Age"
                            className="form-control rounded-0" 
                            onChange={(e) => setAge(e.target.value)}
                            />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already Have an account</p>
                <Link to="/login" className="btn btn-default border w-100 bg=light rounded-0 text-decoraction-none">
                    Login
                </Link>

            </div>

        </div>
    );
}
export default Signup;
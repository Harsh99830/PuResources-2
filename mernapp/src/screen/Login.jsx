import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';  // Import the loading spinner
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import './Login.css'; // Import the CSS file for styling

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);  // State to manage loading
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);  // Start loading

        const response = await fetch("https://pu-resources-backend.onrender.com/api/loginuser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        setLoading(false);  // Stop loading

        if (!json.success) {
            alert("Email or password is incorrect");
        } else {
            localStorage.setItem("authToken", json.authToken);
            navigate("/");
            alert("Login successful");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <div className='container'>
                <form className='m-3' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name='email'
                            value={credentials.email}
                            placeholder="Enter email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name='password'
                                value={credentials.password}
                                onChange={onChange}
                            />
                            <div className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="m-3 btn btn-success" disabled={loading}>
                        Submit
                    </button>
                    <Link to={"/createuser"} className='m-3 btn btn-danger'>Create account</Link>
                </form>
                {loading && (
                    <div className="loading-spinner">
                        <TailSpin
                            height="50"
                            width="50"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            visible={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

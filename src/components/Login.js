import React from 'react';
import { useForm } from "react-hook-form";
import MlApi from './../apis/MlApi'
import { useState, useEffect } from 'react';
import getCookie from "./GetCookie.js";
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Login.css'
import loginVisual from './Resume/pigImage1.png';
import veiybLogo from './Resume/pigImage1.png';

const Login = () => {
    // const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loginErrors, setLoginErrors] = useState([]);
    const onSubmit = async (data) => {
        document.getElementById('#LoginButton').innerHTML = '<div class="spinner-border"></div>';
        document.getElementById('#LoginButton').disabled = true;
        console.log(data)
        var errors = [];

        try {
            const response = await MlApi.post('auth/login', {
                "Username": data.Username,
                "Password": data.Password,
            });
            console.log(response)

            if (response.status === 200) {
                document.cookie = `access_token=${response.data.token};`
                window.location.replace("/contentManager");// navigate("/projects")
            } else {
                document.getElementById('#LoginButton').innerHTML = 'Login';
                document.getElementById('#LoginButton').disabled = false;
            }
        } catch {
            document.getElementById('#LoginButton').innerHTML = 'Login';
            document.getElementById('#LoginButton').disabled = false;
            errors.push("Server error");
        }
        setLoginErrors(errors);
    }

    const getErrors = () => {
        if(loginErrors !== undefined && loginErrors.length > 0){
            var mappedErrors = loginErrors.map(x => <div>{x}</div>)
            var errorContainer = <div className="ErrorContainer" id="#ErrorContainer">
                {mappedErrors}
            </div>
            return errorContainer;
        }
    }

    return (
        <div id="LoginContainer">
            <div id="LoginImage">
                <img src={loginVisual}></img>
            </div>
            <div id="LoginRightContainer">
            <div className="" id="LoginDiv" style={{ textAlign: "center" }}>
                <img src={veiybLogo}></img>
                <h2 className='form-title'>Login pig</h2>
                {getErrors()}
                <form id="CMSLoginForm" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Username" className="form-control" required name="Username"{...register('Username', { maxLength: 30 })} />
                    <input placeholder="Password" type="password" required className="form-control"{...register('Password', { maxLength: 30 })} />
                
                    <button id="#LoginButton" className="submit btn btn default" type="submit">Login</button>
                    {/* <div className="register-password"><Link to="/login">Register</Link> | <Link to="/login">Forgot Password</Link></div> */}
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
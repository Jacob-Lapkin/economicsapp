import { React } from "react";
import { useRef } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'

function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

// Fetch Function 
  async function submitForm(e) {
    e.preventDefault()
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const url = 'http://127.0.0.1:5000/login'
    try {
        const response = await fetch(url, {
            'method':'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(data)
        })
        const responseData = await response.json()
        if (response.ok) {
            localStorage.setItem('token',responseData.token)
            props.setLoggin()
            navigate('/home');

        }
    } catch(error) {
        console.log(error)
    }
  } 

// Returing JSX
  return (
    <>
      <div className="login-cont">
        <h1>Login</h1>
        <form onSubmit={submitForm}>
          <div className="mb-3 mt-3">
            <label for="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={emailRef} required
            />
          </div>
          <div className="mb-3">
            <label for="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              ref={passwordRef} required
            />
          </div>
          <button type="submit" className="button-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

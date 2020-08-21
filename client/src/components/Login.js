import React, {useState} from "react";
import {axiosWithAuth} from './axiosWithAuth'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", login)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      history.push('/protected')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          name='username'
          label='username'
          value={login.username}
          onChange={handleChange}
        ></input>
        <input
          type='password'
          name='password'
          label='password'
          value={login.password}
          onChange={handleChange}
        ></input>

        <button>Log In</button>

      </form>
    </>
  );
};

export default Login;
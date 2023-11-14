import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Login = () => {
  const {authenticated, setAuthenticated} = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = () => {
    if(username === "Alice" && password === 'password') {
        localStorage.setItem('loggedIn', 'Yes');
        setAuthenticated(true)
        navigate('/')
    }
    else {
        alert("Wrong credentials")
    }
  }

  const changeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
  }

  const changePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <div>
        <input type="text" placeholder='input your username' value={username} onChange={(e) => changeUsername(e)} />
        <input type="password" placeholder='your password' onChange={(e) => changePassword(e)} />
        <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Login
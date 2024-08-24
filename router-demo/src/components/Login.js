import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirect, { replace: true } )
    }
  return (
    <div>
        <label>
            UserName: <input type='text' onChange={e => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

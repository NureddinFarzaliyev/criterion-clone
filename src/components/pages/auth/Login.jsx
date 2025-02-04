import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../../../utils/toast'

const Login = () => {
    const navigate = useNavigate()
    const {isLoading, error, login} = useAuth()

    useEffect(() => {
        if(error) errorToast(error)
    }, [error])

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await login(user.email, user.password)

        if(response) {
            successToast("Logged in successfully")
            navigate("/")
        }
    }

    return (
        <div>
            <form onSubmit={(e) => {handleLogin(e)}}>
                <input className="bg-white text-gray m-3" type="text" name="email" onChange={(e) => {handleInput(e)}} />
                <input className="bg-white text-gray m-3" type="password" name="password" onChange={(e) => {handleInput(e)}} />
                <p>{error}</p>
                <button disabled={isLoading}>{isLoading ? "Loading..." : "Login"}</button>
            </form>
            <Link to="/register">Create new profile if you don't have one</Link>
        </div>
    )
}

export default Login

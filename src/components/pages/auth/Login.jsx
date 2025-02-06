import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../../../utils/toast'
import FormInput from '../../ui/FormInput'
import FormInfoAnim from '../../ui/FormInfoAnim'
import spinner from '../../../assets/images/spinner.svg'

const Login = () => {
    const navigate = useNavigate()
    const {isLoading, error, login} = useAuth()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if(error) errorToast(error)
    }, [error])

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await login(user.email, user.password)

        if(response) {
            successToast("Logged in successfully")
            navigate("/")
        }
    }

    return (
        <div className="w-[90%] md:w-[80%] lg:w-1/2 mx-auto mt-10">
            <form onSubmit={(e) => {handleLogin(e)}}>
                <h1 className="font-display font-bold text-3xl mb-14 lg:mt-20">LOGIN</h1>
                <FormInfoAnim isVisible={error}>
                    <p className="my-4 text-center text-red-500 font-display font-bold">{error?.toUpperCase()}</p>
                </FormInfoAnim>
                <FormInput data={user} setData={setUser} name={"email"} placeholder={"Email"} type={"text"} />
                <FormInput data={user} setData={setUser} name={"password"} placeholder={"Password"} type={"password"} />
                <button className="mt-14 bg-gold h-14 font-bold font-display disabled:opacity-50 not-disabled:hover:bg-light-gray not-disabled:cursor-pointer duration-500 shadow-md w-full p-3 flex items-center justify-center" 
                disabled={isLoading || user.password.length === 0 || user.email.length === 0}>
                    {isLoading ? <img src={spinner} className="h-10" /> : "LOGIN"}
                </button>
                <Link to="/register"><p className="text-sm opacity-70 dark:text-white text-gray text-center mt-4 underline hover:opacity-100 transition duration-500">Don't have an account? Register.</p></Link>
            </form>
        </div>
    )
}

export default Login

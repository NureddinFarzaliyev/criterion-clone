import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { errorToast, successToast } from "../../../utils/toast"

const Register = () => {
    const navigate = useNavigate()
    const {isLoading, error, register} = useAuth()

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

    const handleRegister = async (e) => {
        e.preventDefault()
        const response = await register(user.email, user.password)

        if(response) {
            successToast("Registered successfully")
            navigate("/verify")
        }
    }

    return (
        <div className="w-[90%] md:w-[80%] lg:w-1/2 mx-auto mt-10">
            <form onSubmit={(e) => {handleRegister(e)}}>
                <h1 className="font-display font-bold text-3xl mb-14 lg:mt-20">CREATE ACCOUNT</h1>
                <p className="my-4 text-center text-red-500 font-display font-bold">{error?.toUpperCase()}</p>
                <input className="border-b-2 dark:border-b-light-gray/40 outline-none focus:border-b-light-gray/70 transition font-display p-2 text-md w-full" placeholder="Email" type="text" name="email" onChange={(e) => {handleInput(e)}} />
                <input className="border-b-2 dark:border-b-light-gray/40 outline-none focus:border-b-light-gray/70 transition font-display p-2 text-md w-full mt-5" placeholder="Password" type="password" name="password" onChange={(e) => {handleInput(e)}} />
                <button className="mt-14 bg-gold font-bold font-display hover:bg-light-gray cursor-pointer transition duration-500 shadow-md w-full p-3" disabled={isLoading}>{isLoading ? "Loading..." : "REGISTER"}</button>
                <Link to="/login"><p className="text-sm opacity-70 dark:text-white text-gray text-center mt-4 underline hover:opacity-100 transition duration-500">Already have an account? Login.</p></Link>
            </form>
        </div>
    )
}

export default Register

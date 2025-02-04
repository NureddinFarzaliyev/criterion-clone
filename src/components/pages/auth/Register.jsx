import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
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
        <div>
            <form onSubmit={(e) => {handleRegister(e)}}>
                <input className="bg-white text-gray m-3" type="text" name="email" onChange={(e) => {handleInput(e)}} />
                <input className="bg-white text-gray m-3" type="password" name="password" onChange={(e) => {handleInput(e)}} />
                <p>{error}</p>
                <button disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
    )
}

export default Register

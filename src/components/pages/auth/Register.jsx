import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { errorToast, successToast } from "../../../utils/toast"
import { AnimatePresence, motion } from "motion/react"
import { IoInformationCircleOutline } from "react-icons/io5";
import FormInfoAnim from "../../ui/FormInfoAnim"
import FormInput from "../../ui/FormInput"

const Register = () => {
    const navigate = useNavigate()
    const {isLoading, error, register} = useAuth()

    useEffect(() => {
        if(error) errorToast(error)
    }, [error])

    const [user, setUser] = useState({
        email: "",
        password: "",
        repeat: ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        if(user.password !== user.repeat) return errorToast("Passwords do not match.")
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
                <FormInfoAnim isVisible={error}>
                    <p className="my-4 text-center text-red-500 font-display font-bold">{error?.toUpperCase()}</p>
                </FormInfoAnim>
                <FormInput data={user} setData={setUser} name={"email"} placeholder={"Email"} type={"text"} />
                <FormInput data={user} setData={setUser} name={"password"} placeholder={"Password"} type={"password"} />
                <FormInfoAnim isVisible={user.password.length < 6 && user.password.length !== 0}>
                    <span className="font-display mt-2 text-sm ml-2 flex items-center gap-1"><IoInformationCircleOutline className="text-lg" /> Password must contain more than 6 characters.</span>
                </FormInfoAnim>
                <FormInput data={user} setData={setUser} name={"repeat"} placeholder={"Repeat Password"} type={"password"} />
                <FormInfoAnim isVisible={user.password.length !== 0 && user.repeat.length !== 0 && user.password !== user.repeat}>
                        <span className="font-display mt-2 text-sm ml-2 flex items-center gap-1"><IoInformationCircleOutline className="text-lg" /> Passwords do not match.</span>
                </FormInfoAnim>
                <button className="mt-14 bg-gold font-bold font-display disabled:opacity-50 not-disabled:hover:bg-light-gray not-disabled:cursor-pointer duration-500 shadow-md w-full p-3" 
                disabled={isLoading || user.password.length < 6 || user.repeat.length < 6 || user.password !== user.repeat || user.email.length === 0}>
                    {isLoading ? "Loading..." : "REGISTER"}
                </button>
                <Link to="/login"><p className="text-sm opacity-70 dark:text-white text-gray text-center mt-4 underline hover:opacity-100 transition duration-500">Already have an account? Login.</p></Link>
            </form>
        </div>
    )
}

export default Register

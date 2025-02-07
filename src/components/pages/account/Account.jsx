import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { errorToast, successToast } from '../../../utils/toast'
import { Link, useNavigate } from 'react-router-dom'
import spinner from '../../../assets/images/spinner.svg'
import { BiHeart, BiLogOut } from 'react-icons/bi'

const Account = () => {
    const navigate = useNavigate()
    const {logout, isLoading, error, getUser} = useAuth()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser()
            if(!user){
                navigate('/')
            }

            console.log(user)
            setUser(user)
        }

        fetchUser()
    }, [])

    const handleLogout = async () => {
        const response = await logout()

        if(response){
            successToast("Logged Out Successfully!")
            navigate('/')
        }

        if(error){
            errorToast(error)
        }
    }

  return (
    <div className="w-[70%] mx-auto mt-10">
        <h1 className="font-text text-xl md:text-4xl mb-14">{user?.email}</h1>
        <div className="flex gap-5">
            <Link className='h-14 w-48 bg-gray dark:bg-white text-white dark:text-gray hover:scale-110 transition-all duration-400 shadow-lg flex items-center justify-center font-display font-bold'  to='/wishlist'> <BiHeart className='text-2xl mt-[-3px] mr-2' /> WISHLIST</Link>
            <button className='h-14 w-48 bg-gray dark:bg-white text-white dark:text-gray hover:scale-110 transition-all duration-400 shadow-lg disabled:dark:bg-white/20 disabled:bg-gray/80 flex items-center justify-center not-disabled:cursor-pointer font-display font-bold' 
            onClick={handleLogout} disabled={isLoading}>{isLoading ? (<img src={spinner} className='h-10' alt='Loading...' />) : (<><BiLogOut className='text-2xl mt-[-3px] mr-2' /> LOG OUT</>)}</button>
        </div>
    </div>
  )
}

export default Account

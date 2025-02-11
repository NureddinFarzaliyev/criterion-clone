import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { errorToast, successToast } from '../../../utils/toast'
import { Link, useNavigate } from 'react-router-dom'
import spinner from '../../../assets/images/spinner.svg'
import { BiHeart, BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../../features/auth/auth'
import UserAddress from './UserAddress'

const Account = () => {
    const navigate = useNavigate()
    const {logout, isLoading, error, getUser} = useAuth()
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser()
            if(!user){
                navigate('/')
            }

            setUser(user)
        }

        fetchUser()
    }, [])

    const handleLogout = async () => {
        const response = await logout()

        if(response){
            successToast("Logged Out Successfully!")
            navigate('/')
            dispatch(setAuth({isAuthenticated: false, userId: null}))
        }

        if(error){
            errorToast(error)
        }
    }

  return (
    <div className="w-[70%] mx-auto mt-10">
        <h1 className="font-text text-xl md:text-4xl mb-14 max-md:text-center">{user?.email}</h1>
        <div className="flex max-md:flex-col max-md:items-center gap-5">
            <Link className='h-14 w-48 bg-gray dark:bg-white text-white dark:text-gray hover:scale-110 transition-all duration-400 shadow-lg flex items-center justify-center font-display font-bold'  to='/wishlist'> <BiHeart className='text-2xl mt-[-3px] mr-2' /> WISHLIST</Link>
            <button className='h-14 w-48 bg-gray dark:bg-white text-white dark:text-gray hover:scale-110 transition-all duration-400 shadow-lg disabled:dark:bg-white/20 disabled:bg-gray/80 flex items-center justify-center not-disabled:cursor-pointer font-display font-bold' 
            onClick={handleLogout} disabled={isLoading}>{isLoading ? (<img src={spinner} className='h-10' alt='Loading...' />) : (<><BiLogOut className='text-2xl mt-[-3px] mr-2' /> LOG OUT</>)}</button>
        </div>
        <UserAddress />
    </div>
  )
}

export default Account

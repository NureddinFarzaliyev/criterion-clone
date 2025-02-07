import useAuth from '../../../hooks/useAuth'
import { errorToast, successToast } from '../../../utils/toast'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {
    const navigate = useNavigate()
    const {logout, isLoading, error} = useAuth()

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
    <div>
        <button onClick={handleLogout} disabled={isLoading}>{isLoading ? "Loading..." : "Log Out"}</button>
        <Link to='/wishlist'>Wishlist</Link>
    </div>
  )
}

export default Account

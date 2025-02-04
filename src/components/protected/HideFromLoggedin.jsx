import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../ui/LoadingPage'
import GeneralSection from '../ui/GeneralSection'

const HideFromLoggedin = ({children}) => {
    const {getUser, isLoading} = useAuth()

    const navigate = useNavigate()

    const checkUser = async () => {
        const user = await getUser()
        if(user) navigate("/")
    }
    
    useEffect(() => {
        checkUser()
    }, [getUser])


    return (
        <GeneralSection>
            <LoadingPage isLoading={isLoading}>
                {children}
            </LoadingPage>
        </GeneralSection>
    )
}

export default HideFromLoggedin

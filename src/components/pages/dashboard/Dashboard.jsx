import React, { useEffect } from 'react'
import GeneralSection from '../../ui/GeneralSection'
import LoadingPage from '../../ui/LoadingPage'
import useAuth from '../../../hooks/useAuth'

const Dashboard = () => {
    const {getUser, isLoading} = useAuth()

    const fetchUser = async () => {
        const user = await getUser()

        if(!user || user.user_metadata.role !== "admin") {
            window.location.href = "/"
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <GeneralSection>
        <LoadingPage isLoading={isLoading}>

            <h1>Dashboard</h1>

        </LoadingPage>
        </GeneralSection>
    )
}

export default Dashboard

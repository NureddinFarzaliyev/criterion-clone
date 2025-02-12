import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth, setLoading } from '../../features/auth/auth'
import supabase from '../../tools/supabase'

const CheckAuth = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const checkUser = async () => {
            dispatch(setLoading(true))

            const {data, error} = await supabase.auth.getUser()
    
            if(!data) {
                dispatch(setAuth({isAuthenticated: false, userId: null}))
                return
            }

            if(error){
                console.error(error)
                return
            }

            dispatch(setAuth({isAuthenticated: true, userId: data.user.id, role: data.user.user_metadata.role}))
            dispatch(setLoading(false))
        }
        checkUser()
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default CheckAuth

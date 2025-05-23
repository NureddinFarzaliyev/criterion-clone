import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { useSelector } from 'react-redux'

const ProfileIcon = () => {
  const { getUser } = useAuth()
  const [username, setUsername] = useState('')
  const authState = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
      setUsername(user?.email || '')
    }

    fetchUser()
  }, [getUser, authState.isAuthenticated])

  return (
    <div className='h-5 flex gap-2'>
      {username !== '' && (
        <span className='text-sm max-md:hidden'>{username}</span>
      )}
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><polygon id="a" points="0 24.0002 24 24.0002 24 0.0002 0 0.0002"></polygon></defs><g fill="none" fillRule="evenodd"><g className='dark:fill-white fill-gray' fillRule="nonzero"><path d="M14,4.5 C14,2.56704297 12.4331735,1 10.5,1 C8.56682649,1 7,2.56704297 7,4.5 C7,6.43295703 8.56682649,8 10.5,8 C12.4331735,8 14,6.43295703 14,4.5 Z M16,4.5 C16,7.53746469 13.5378049,10 10.5,10 C7.46219514,10 5,7.53746469 5,4.5 C5,1.46253531 7.46219514,-1 10.5,-1 C13.5378049,-1 16,1.46253531 16,4.5 Z" transform="translate(2 1.011)"></path><path d="M1,21 C1,21.5522847 0.55228475,22 0,22 C-0.55228475,22 -1,21.5522847 -1,21 L-1,19.399 C-1,14.8335963 4.41085344,12 10,12 C15.5891466,12 21,14.8335963 21,19.399 L21,21 C21,21.5522847 20.5522847,22 20,22 C19.4477153,22 19,21.5522847 19,21 L19,19.399 C19,16.2885287 14.6299727,14 10,14 C5.37002733,14 1,16.2885287 1,19.399 L1,21 Z" transform="translate(2 1.011)"></path></g></g></svg>
    </div>
  )
}

export default ProfileIcon

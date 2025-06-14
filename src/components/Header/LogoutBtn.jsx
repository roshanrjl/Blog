import React from 'react'
import { useDispatch } from 'react-redux'
import authservices from '../../appwrite/auth'
import {logout} from '../../store/authslice'

function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler =  () => {
        authservices.logout().then(()=>{
            dispatch(logout)
        })
    }
  return (
  <button
  className='inline-block px-6 py-2 duration-200 hover:bg-blue-700 rounded-full'
    onClick={logoutHandler}
  >Logout</button>
  )
}

export default LogoutBtn
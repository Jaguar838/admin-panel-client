import { FC, PropsWithChildren, createContext, useState, useEffect } from 'react'
import { IContext, TypeUserState } from "./auth.interfaces";
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { AuthService } from '../../../service/auth/auth.service'

export const AuthContext = createContext({} as IContext)

const AuthProvider:FC<PropsWithChildren<unknown>> = ({children}) => {
 const [user, setUser]=useState<TypeUserState>(null)

  const {pathname}=useRouter()

  useEffect(()=>{
    const accessToken=Cookies.get('accessToken')
  if(accessToken){
    const user=JSON.parse(localStorage.getItem('user') || '')
  setUser(user)
  }
  },[])

  useEffect(()=>{
    const accessToken=Cookies.get('accessToken')
  if(!accessToken && !user){
    AuthService.logout()
    setUser(null)
  }
  },[pathname])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider

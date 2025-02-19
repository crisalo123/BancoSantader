import { createContext, ReactNode, useContext, useState } from "react"
import { AuthValues } from "../core/types/user"
import { AuthSlice, AuthState } from "./authStore"
import { Spinner } from "../core/ui"
import { useBoundStore } from "../store"
import { shallow } from "zustand/shallow"
import { v4 as uuidv4 } from 'uuid';



type ActionCallback = () => void

interface AuthContextValue{
  login:(params: AuthValues, cd?:ActionCallback) => Promise<void>
  logout: (cb?:ActionCallback) => void
  isLoggingIn:boolean
  user: AuthState
  error: string | null
}


interface ProviderProps{
   children:ReactNode
}

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider: React.FC<ProviderProps> = ({ children}) => {
 const value = useAuthProvider()
 if(value.isLoggingIn) return <Spinner />

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}


const useAuthProvider = (): AuthContextValue => {
  const authStore: AuthSlice = useBoundStore(
   ({
     
     isAuthenticated,
     loggedInDate,
     login,
     logout,
     firstName,
     lastName,
     roleName,
     token,
     userId
     
      
  }) => ({
   isAuthenticated,
     loggedInDate,
     login,
     logout,
     firstName,
     lastName,
     roleName,
     token,
     userId
  }),
  shallow
 )


 const [isLoggingIn, setIsLoggingIn] = useState(false)
 const [error, setError] = useState('')


 const login : AuthContextValue['login'] = async (values, callback) => {
  setIsLoggingIn(true)
  setError('')
  try {
   const mockUser = {
    userId: '1',
    firstName:values.username,
    lastName: values.username, 
    roleName: 'admin',
    roleId: '1',
    token: uuidv4(),
   }
    authStore.login({ ...mockUser });
   callback?.()
  } catch (error) {
     console.log(error)
    setError('Usuario o contraseña incorrecta')
  }
  finally {
    setIsLoggingIn(false); 
  }

}

const logout: AuthContextValue['logout'] = (callback) => {
  authStore.logout()
  callback?.()
}

return {
  user: {
    isAuthenticated: authStore.isAuthenticated,
    token: authStore.token,
    roleName: authStore.roleName,
    userId: authStore.userId,
    loggedInDate: authStore.loggedInDate,
    firstName: authStore.firstName,
    lastName: authStore.lastName,
 
  },
  login,
  isLoggingIn,
  logout,
  error
}


}


export const useAuth = (): AuthContextValue => useContext(AuthContext)
export const useAuthStore = (): Omit<AuthState, 'token' | 'refreshToken'> =>
  useBoundStore(
    ({ isAuthenticated, loggedInDate, firstName, lastName, roleName, userId }) => ({
      isAuthenticated,
      loggedInDate,
      firstName,
      lastName,
      roleName,
      userId
    }),
    shallow
  )
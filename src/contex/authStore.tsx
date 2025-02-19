import type { StateCreator } from 'zustand'
import { AuthUser } from '../core/types/user'
import { Nulleable } from '../core/types/utils'


export interface User {
    userId: string
    userName:string
    email:string

}

export  interface AuthState extends Nulleable<AuthUser>{
  isAuthenticated: boolean
  loggedInDate: Date | null
  token: string | null;
  
}

export interface AuthActions {
  login: (user:  AuthUser) => void;
  logout: () => void;
}


export type AuthSlice = AuthState & AuthActions

const initialState: AuthState = {
  isAuthenticated: false,
  loggedInDate: null,
  firstName: null,
  lastName: null,
  roleName: null,
  token: null,
  userId: null
}

export  const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  login(newState){
    set({
      isAuthenticated: true,
      loggedInDate: new Date(),
        ...newState,
    })
  },
  logout() {
      set(initialState)
  },
})
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { usePasswordVisibility } from '@/core/hooks'

import { Login, loginSchema } from './login-schema'
import { useAuth } from '@/contex/AuthContext'
import { useNavigate } from 'react-router-dom'


export const useLoginForm = () => {
  const { passwordsVisible, toggleVisibility, passwordsVisibleUser, toggleVisibilityUser } = usePasswordVisibility()
  const [isLoading, setIsLoading] = useState(false)

   const { login } = useAuth()
   const navigate = useNavigate()

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema)
  })

  const onSuccess = async (data: Login): Promise<void> => {
     setIsLoading(true)
     await login(data, () => navigate('/home'))
    setIsLoading(false)
  }

  return {
    form,
    isLoading,
    passwordsVisible,
    onSuccess,
    toggleVisibility,
    passwordsVisibleUser,
    toggleVisibilityUser
  }
}

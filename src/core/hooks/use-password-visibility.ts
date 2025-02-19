import { useState } from 'react'

interface PasswordVisibility {
  [key: string]: boolean
}
export function usePasswordVisibility() {
  const [passwordsVisible, setPasswordsVisible] = useState<PasswordVisibility>(
    {}
  )

  const [passwordsVisibleUser, setPasswordsVisibleUser] = useState<PasswordVisibility>(
    {}
  )

  const toggleVisibility = (inputName: string) => {
    setPasswordsVisible({
      ...passwordsVisible,
      [inputName]: !passwordsVisible[inputName]
    })

   
  }

  const toggleVisibilityUser = (inputName: string) => {
    setPasswordsVisibleUser({
      ...passwordsVisibleUser,
      [inputName]: !passwordsVisibleUser[inputName]
    })

   
  }

  return { passwordsVisible, toggleVisibility , passwordsVisibleUser, toggleVisibilityUser}
}

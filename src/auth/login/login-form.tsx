import {
  Button,
 
} from '@/core'

import { CiKeyboard } from "react-icons/ci";
import { InputField } from '@/core/ui/InputField';
import { Login, loginSchema } from './login-schema';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";


interface LoginFormProps {
  className: string
  onSuccess: (values: Login) => void
}





export const LoginForm:React.FC<LoginFormProps> = ({className, onSuccess}) => {
 

  const { formState, handleSubmit, register,} = useForm<Login>({
    resolver: zodResolver(loginSchema)
  }) 

  const { errors } = formState

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showuser, setShowUser] = useState<boolean>(false)
  
   
  
 
  return (
      <form className={className}  onSubmit={handleSubmit(onSuccess, (errors) => console.log(errors))} > 
        <div className='grid grid-col-1 gap-5  '>
          <div className='col-span-1 '>
            <InputField 
             type='number'
              label='Número de documento'
             {...register('identificationNumber')}
              className='text-sm rounded-md '
              error={errors.identificationNumber?.message}
            
            />
          </div>
          <div className={`col-span-1  `}>
            <InputField 
            type={showPassword ? 'text' : 'password'}
              label='Clave Santander'
             {...register('password')}
              className='text-sm rounded-md'
              error={errors.password?.message}
             leftIcon={
                <FaEye className='hover:cursor-pointer hover:text-primary-800' onClick={() => setShowPassword(!showPassword)} />
             }
             iconClass='mx-72 mt-1  md:mx-[380px] lg:mx-[360px]'
            />
           
          </div>
          <div className='col-span-1 '>
            <InputField 
              type={showuser ? 'text' : 'password'}
              label='Usuario'
             {...register('username')}
              className='text-sm rounded-md'
              error={errors.username?.message}
              leftIcon={
                <FaEye className='hover:cursor-pointer hover:text-primary-800' onClick={() => setShowUser(!showuser)} />
             }
             iconClass='mx-72 mt-1 md:mx-[380px] lg:mx-[360px]'
            
            />
           
          </div>

          <div className='col-span-1  flex space-x-3 mt-7'>
            <InputField 
             type='checkbox'
             
             {...register('identificationNumber')}
              className='text-sm rounded-md '
              {...register('recoveryNumber')}
              error={errors.recoveryNumber?.message}
            />
            <span className='text-sm'>Recordar el número de documento</span>
          </div>
          </div> 
        <div className='flex space-x-3 mt-3 '>
         <CiKeyboard className='mt-1 mx-0 hover:cursor-pointer text-[#4E89A1]'  />
          <p className='mx-1 text-[#4E89A1] font-semibold'>Teclado virtual</p>
        </div>
        <div className='flex items-center justify-around pt-5 pb-10'>
        <Button
          className='w-44 rounded-2xl bg-red-600 text-white transition-all hover:bg-red-700 '
          type='submit'
        >
          <span>Ingresar</span>
        </Button>
      </div>
        
        </form>
      
  )
}

import { Wrapper } from "@/core/ui/wrapper"

import logoBanco from '../auth/assets/logoBanco.png'
import  fondoLogin from '../auth/assets/fondoLogin.png'

import { LoginForm } from "@/auth/login"
import { useAuth, useAuthStore } from "@/contex/AuthContext"
import { AuthValues } from "@/core/types/user"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Alert } from '../core/ui/Alert/Alert';


export const LoginPage = () => {

  const {  login,error } = useAuth()
  const navigate = useNavigate()
  
  const { isAuthenticated } = useAuthStore()

  const handleSuccess = (values: AuthValues): void => {
  login(values, )

  }

  useEffect(() => {
 if(isAuthenticated){
   navigate('/home')
 }
  }, [isAuthenticated])

  if(error){
    return <div className='my-5'>
    <Alert showIcon variant='danger'>
      {error}
    </Alert>
  </div>
  }


  return (
    <div className="h-full w-auto  2xl:mt-20 2xl:border-2 2xl:rounded-lg  2xl:ml-72 2xl:mr-[280px] ">  
     <Wrapper className='flex h-full  items-center justify-center  md:pl-0  '>
        <div className='grid grid-cols-1  md:grid-cols-12 w-full  '>
          <div className="col-span-7  hidden md:block  mx-auto h-full  pt-16 relative">
          <img src={logoBanco} alt="FondoLogin"  className="absolute w-40 pt-16 mx-16"/> 
            <img src={fondoLogin} alt="FondoLogin" /> 

          </div>
          <div id="Formulario" className=" w-12/12   shadow-2xl  text-sm md:text-base md:col-span-4 md:w-[562px]  h-full     md:border-l-2 border-gray-200   border-r-0">                      
           <div className="md:p-5 md:pl-16 space-y-4 text-center mt-3 md:mt-0 md:text-left"> 
            <h2 className="text-2xl">¡Hola! Te damos la bienvenida</h2>
            <p>Completá tus datos y empezá a operar.</p>
            </div>
            <LoginForm className='mx-auto w-9/12 justify-center 2xl:w-[394px] mt-5' onSuccess={handleSuccess} />
            <div className="text-center md:space-y-3 mt-6">
              <p>Si no tienés u olvidaste tu clave y/o usuario</p>
               <p className="text-red-500 font-bold">Crear o recuperar clave y/o usuario</p>
             <p>Si tienés una clave recién generada</p>
             <p className="text-red-500 font-bold">Crear usuario</p>

             <div className="bg-[#E9F8FE] p-3 w-full mt-16 md:mt-0">
              <p className=" text-center text-sm">No compartas por redes sociales, telefono o email tus claves personales o Token de seguridad.Nadie en nombre del banco te lo va pedir </p>
            
            <a  target="_blank" rel="noopener noreferrer"  href="https://main.un.org/securitycouncil/es">conocé más consejos de seguridad</a>
            </div>
            </div>

           
          </div>
         
        </div>
      </Wrapper>
      </div>
   
  )
}


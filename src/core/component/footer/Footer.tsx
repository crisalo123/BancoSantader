import { Button, Wrapper } from "@/core/ui"
import { Link } from "react-router-dom"

import logoWhite from '@/auth/assets/logoBanco.png'
import { useAuthStore } from "@/contex/AuthContext"
import dayjs from "dayjs"
import "dayjs/locale/es";
 
dayjs.locale("es");

const Footer = () => {

   const { loggedInDate } = useAuthStore()
  const formattedDate = loggedInDate ? loggedInDate.toLocaleString() : 'N/A'
  const fechaFormateada = dayjs(formattedDate).format("dddd D [de] MMMM [de] YYYY");
  const intialMayusData = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1)
  
  const dateformat = dayjs(formattedDate).format('DD/MM/YYYY')
  const classButton = 'className="text-white bg-gray-900 border-[1.5px] border-white rounded-full'
   

  return (
    <footer className="bg-gray-900    justify-between mx-auto text-white py-6 ">
      <Wrapper size='full' className=" grid md:grid-cols-2  md:w-11/12 gap-3">
         <div className="col-span-1  text-center justify-center mx-auto">  
          <Link aria-label='Ir al home' to={'/home'} >
            <div className='col-span-1 '>
              <picture>
                <img alt='Logo' className='px-2 w-56  text-red !mx-10' src={logoWhite} />
                </picture>
            </div>
           
          </Link>
           <p className="mx-12">{intialMayusData}</p>
           <p>Último acceso: {dateformat}</p>
          </div>

          <div className="col-span-1  mx-10 w-10/12 justify-end md:mx-24 space-y-3  ">
            <p className="font-bold md:text-right text-center">¿Te arrepentiste o quierés dar de baja un producto?</p>
            <p className="text-center md:text-right">Podés dar de baja productos en cualquier momento o arrepentirte
              de alguna contratación que hayas hecho en los últimos 10 días.
            </p>

            <div className="flex   space-x-4 md:space-x-3  md:justify-end md:mx-auto mt-3">
              <Button className={classButton}> Botón de arrepentimiento</Button>
              <Button className={classButton}> Botón de baja</Button>
            </div>

          </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
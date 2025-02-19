import { BiTransfer } from "react-icons/bi";
import { PiHandDepositFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { PiMoney } from "react-icons/pi";
import { MdOutlineHelpCenter } from "react-icons/md";

import insuranceFamily from "@/pages/homePage/assets/img/segurosFamilia.jpg";
import ahorro from "@/pages/homePage/assets/img/ahorro.avif";
import insuranceAut from "@/pages/homePage/assets/img/segurosAuto.jpg";



type CardProps = {
  label: string,
  icon: JSX.Element,
  
}

type CaroselProps = {
  title: string,
  label:string
  img: string,
  
}



const classsIcon = 'justify-center mx-auto h-14 w-14 md:mt-7  text-tertiary-900'

export const dataCard: CardProps[] = [
  {
    label: 'Transferencias',
    icon: <BiTransfer className={` -rotate-45  ${classsIcon} ` } />,
     
  },

  {
    label: 'Pago de servicios',
    icon: <PiHandDepositFill className={classsIcon} />,
   
  },

  {
    label: 'Prestamos',
    icon: <FaHandshake className={classsIcon} />,
   
  },

  {
    label: 'Seguros',
    icon: <FaHandHoldingHeart className={classsIcon}/>,
   
  },

  {
    label: 'SuperFondos',
    icon: <PiMoney className={classsIcon} />,
   
  },
  {
    label: 'SuperFondos',
    icon: <MdOutlineHelpCenter className={classsIcon} />,
   
  },
]


export const dataCarousel: CaroselProps[] = [
  {
     title: 'Invertí en SuperFondos ¡es supersimple!',
     label:'Entrás con poquito y sin comisiones de entrada ni salida.',
     img: insuranceFamily
  },
  {
    title: 'Cotizá el seguro ideal para tu auto en pocos pasos',
    label:'Pedilo 100% online y contá con auxilio mecánico las 24 horas, cobertura ante daños y mucho mas',
    img: ahorro
 },
 {
  title: 'Brindale a tu familia la proteccion que necesita',
  label:'Disfrutá sin preocupaciones con tu Seguro de vida Santander, tendrás atencion médoca las 24 horas. Pedilo 100% online.',
  img: insuranceAut
}

]



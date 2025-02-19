import { useAuthStore } from "@/contex/AuthContext";
import { Card, SwitchField } from "@/core";
import { FaSearch } from "react-icons/fa";
import { capitalizeFirstLetter } from "../const/const";
import { useEffect, useState } from "react";





const CardHomePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  }; 
  
  const valorNumer = 13000;

  
    const { firstName, } = useAuthStore()
    const nameFirst = firstName ? capitalizeFirstLetter(firstName) : '';

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <div>
           <div className="text-center hidden md:flex justify-center items-center gap-3 "> 
          <FaSearch className="text-tertiary-900" />
           <h1 className=" text-gray-600"> Buscar operaciones, productos, secciones y consultas</h1>
          </div>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 pt-4 !w-full ">
              <div className="col-span-3 w-10/12 bjustify-center mx-auto ">
               <p className="text-3xl">Hola, <span className="font-semibold">{nameFirst}</span></p>
               <p className="mt-5">Estado de tu cuenta</p>
               <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-10">
                <Card className="bg-white p-3 h-56 ">
                 <p>Cuentas</p>
                 <p className="text-sm text-gray-500 ">Saldos totales</p>
                 <p className="mt-4">$ {isChecked ?  valorNumer : '*****'}</p>
                 <p className="mt-3">U$S {isChecked ?  valorNumer : '*****'}</p>
                  <p className="mt-3">ver movimientos</p>
                </Card>

                <Card className="p-3 bg-[#DC2428] text-white">
                 <p>Terminada en ****</p>
                 <p className="text-sm mt-1">Ciera el  *****| Vence el ****  </p>
                 <p>Últimos consumos</p>
                 <p className="mt-4">$ {isChecked ?  valorNumer : '*****'}</p>
                 <p className="mt-3">U$S {isChecked ?  valorNumer : '*****'}</p>
                </Card>
               </div>
              </div>


              <div className="col-span-1 pt-4 absolute right-3 md:relative md:w-40 justify-center md:justify-end mx-auto ">
              <SwitchField
              className="bg-red-400  "
              checked={isChecked}
               onChange={handleSwitchChange}
                 label="Ocultar saldos"
                  labelPosition={isMobile ? 'top' :'left'}
               labelColor="#000"
                fontSize={isMobile ? 'sm' : 'md'}
                   wrapperClassName="mb-4"
                    />

              </div>

            </div>
    </div>
  )
}

export default CardHomePage
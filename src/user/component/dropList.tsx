import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/core/ui/dropdown-menu"
import { IoMenuOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { useState } from "react";


export const DropList = () => {

   const [isOpen, setIsOpen] = useState(false)
  return (
   <div className="relative"  >
   <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
   <DropdownMenuTrigger className=" flex space-x-2 border-gray-300 border-2 mx-4 rounded-3xl p-1">
   <IoMenuOutline className= " text-white md:text-red-700 h-7 w-7 "  /> 
    <span className="mx-3 pr-3 text-white hidden md:block md:text-black">Menú</span>
   </DropdownMenuTrigger>

   {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10 pointer-events-none" />}


   <DropdownMenuContent className="bg-white    text-gray-500 border-gray-300 border-r-2 rounded-sm p-2 -mt-16 ">
    {/* <DropdownMenuLabel className="justify-between mx-auto flex text-black" >
     </DropdownMenuLabel> */}
     <DropdownMenuItem className="  justify-between text-black text-md"><span className="flex space-x-3 font-semibold hover:cursor-pointer">
     <span className="text-red-700 pr-3 pt-1 "> <GrClose /> </span> Cerrar menú  </span> <span className="text-red-700">inicio</span></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="mt-4  border-b-[1.7px] border-gray-300">Consultas</DropdownMenuItem>
    <DropdownMenuItem>Cuentas</DropdownMenuItem>
    <DropdownMenuItem>Tarjetas</DropdownMenuItem>
    <DropdownMenuItem>Préstamos</DropdownMenuItem>
    <DropdownMenuItem>Seguros | Multiasistencias</DropdownMenuItem>
    <DropdownMenuItem>Comprobantes</DropdownMenuItem>
    <DropdownMenuItem>Resumen Impositivo</DropdownMenuItem>
    <DropdownMenuItem>Echeq</DropdownMenuItem>
    <DropdownMenuItem>Seguimiento de gestiones</DropdownMenuItem>
    <DropdownMenuItem>Centro de Ayuda</DropdownMenuItem>
    <DropdownMenuItem>Fila agil</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

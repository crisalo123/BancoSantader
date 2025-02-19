import { useEffect, useState } from "react";
import { Card } from "@/core";
import { dataCard } from "../const/mockupData";
import { IoMdAdd } from "react-icons/io"; // Icono de "+"

const AcceSpeed = () => {
  const [expanded, setExpanded] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


   useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <div>
      <h1 className="text-2xl p-8 mx-10">Accesos rápidos</h1>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-4   p-3 md:p-0 md:gap-16 md:w-11/12  justify-center mx-auto">
      
        {dataCard
          .slice(0, expanded || !isMobile ? dataCard.length : 3)
          .map((item, index) => (
           
            <Card
              key={index}
              className="bg-white p-3 h-20 mb-3 md:mb-0 md:h-40 md:w-36 md:mx-7    lg:mx-6 shadow-coolGray-800 hover:shadow-2xl hover:border-2 hover:cursor-pointer"
            >
              <span>{item.icon}</span>
              <p className="text-center mt-5 md:mt-3 text-xs md:text-md ">{item.label}</p>
            </Card>
            
            
          ))}

        {!expanded && window.innerWidth < 768 && dataCard.length > 4 && (
          <Card
            className="bg-white p-3 h-20 md:w-36 md:mx-7  lg:mx-6 flex items-center justify-center shadow-coolGray-800 hover:shadow-2xl hover:border-2 hover:cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            <IoMdAdd className="text-gray-500 text-4xl" />
          </Card>
        )}
      </div>
    </div>
  );
};

export default AcceSpeed;

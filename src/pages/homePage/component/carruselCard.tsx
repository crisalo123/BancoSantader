import { Button, Card } from "@/core";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataCarousel } from "../const/mockupData";


const CheckarruselCard = () => {

  const settings = {
    dots: true,  // Muestra los puntos de navegación
    infinite: true,  // Permite el desplazamiento infinito
    speed: 500,  // Velocidad de transición
    slidesToShow: 1,  // Número de slides visibles
    slidesToScroll: 1,  // Número de slides que se desplazan
    autoplay: true,  // Activa el auto-slide
    autoplaySpeed: 3000,  // Tiempo entre cada slide
  };
  return (
    <div className="w-11/12 md:mx-20    ">
    <Slider {...settings }  >
      {dataCarousel.map((item, index: number) => (
          <Card  key={index}  className="bg-white ">
          <div className="grid grid-cols-3 gap-4  "> 
          <div className=" col-span-3 md:col-span-2 p-5  mt-20 mx-10 space-y-6"> 
          <p className="text-3xl font-medium">{item.title}</p>
          <p>{item.label}</p>
          <Button  className="bg-white text-red-700  hover:bg-red-600 hover:text-white rounded-2xl border-[1.5px] border-red-700">
              Consultar
            </Button>
          </div>
          <div className=" hidden md:block md:col-span-1 justify-end mx-auto "> 
          <picture>
          <img src={item.img} alt="imagen" className="h-80" />
          </picture> 
          </div>   
          </div>  
          <div>
          </div>
          </Card>


      ))}
    </Slider>
  </div>
  )
}

export default CheckarruselCard
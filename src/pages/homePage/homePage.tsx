
import Layout from "@/core/component/layout/Layout"
import CardHomePage from "./component/cardHomePage";
import AcceSpeed from "./component/acceSpeed";
import CheckarruselCard from "./component/carruselCard";
import OtherProduct from "./component/otherProduct";


export const HomePage = () => {
  return (
    <Layout  className=" h-full w-full bg-[#F8F9FA] ">
         <div className="container justify-center mx-auto pt-10  ">
           <CardHomePage />
           <AcceSpeed />
           <div className="mt-10 w-full  flex  justify-center  mx-auto md:justify-normal md:mx-0 md:flex-none ">
           <CheckarruselCard />
           </div>
           <div className="mt-10 w-full  pb-10">
            <OtherProduct />
           </div>
         </div>

    </Layout>
  )
}


import { Card } from "@/core"

type OtherProps = {
  label: string
  paragrap?:string
  subParagrap?: string
}


const OtherProduct = () => {
 const otherProduct: OtherProps[]  = [
    {
      label:'SuperClub+',
      paragrap:'Tienés',
      subParagrap: '2.984 puntos'
    },
    {
      label:'Inversiones',
     
    },
    {
      label:'Dólar MEP',
  
    }, {
      label:'Seguros',
      subParagrap:'Cotizá tu seguro'
     
    }
  ]
  return (
    <div className="w-11/12 justify-center mx-auto md:mx-20 ">
      <h1 className="text-2xl p-8 ">Otros productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
       {otherProduct.map((item, index: number) => (
          <Card  className="bg-white p-5 pl-10 h-40  space-y-6  shadow-coolGray-800 hover:shadow-2xl hover:border-2 hover:cursor-pointer " key={index}>
            <p className="font-semibold text-xl">{item.label}</p>
            <p className="text-gray-600">{item.paragrap}</p>
            <p className="text-lg">{item.subParagrap}</p>
          </Card>

       ))}
      </div>

      </div>
  )
}

export default OtherProduct
import { Navbar } from '../navbar/Navbar'
import { Wrapper } from '@/core/ui'

export const Header: React.FC = () => {

  //  clase para dar un border oscuro shadow-coolGray-800
  return (
    <header className=' sticky  bg-[#ec1c24]   md:text-black md:bg-white top-0 shadow z-[49] bg-primaryBackground'>
      <Wrapper size='full'>
        <Navbar />
      </Wrapper>
    </header>
  )
}

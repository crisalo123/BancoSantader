
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




import { useAuth, useAuthStore } from '@/contex/AuthContext'
import { Link } from '@/core/ui'
import { DropList } from '@/user/component/dropList'
import { CiPower } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import logoBanco from '@/auth/assets/logoBanco.png'
import logoRed from '@/auth/assets/logoRed.png'




export const Navbar: React.FC = () => {
  const navigate = useNavigate()

  const { logout } = useAuth()
  const { firstName = '' } = useAuthStore()
  const fullname = `${firstName?.toLowerCase()}`
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
 
  const nameLeght = firstName &&  firstName?.length >= 11


     useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


  return (
    <nav className='navbar w-full'>
      <div className="container">
        <div className='grid grid-cols-9 h-[69px] items-center '>
          {/*  */}
          <div className='col-span-1 '>
          <DropList />
          </div> 
           
           <div className='col-span-7   grid grid-cols-7  justify-center mx-auto  '>
            <div className=' col-span-6  '> 
          <Link aria-label='Ir al home' to={'/home'} >
            <div className='flex justify-center  '>
              <picture>
                <img alt='Logo' className='pl-12  h-10 md:h-16 text-red-700 ' src={isMobile ? logoRed : logoBanco} />
              </picture>
    
            </div>
            <IoIosNotificationsOutline className={`absolute top-6 right-4 h-7 w-7 md:hidden text-white`} />
            <FaSearch className={`absolute top-7 md:hidden h-5 w-5 text-white right-16`} />
          </Link>
          </div>

           <div className={`col-span-1  hidden md:block items-center justify-center  absolute ${nameLeght ? 'right-72' : ' right-60 2xl:right-80'}  top-6 ` }>
            <span className='border-2 rounded-full p-1 pr-2 pl-2 '> Centro de ayuda</span> 
           </div>
          </div>
          
          

          <div className={` col-span-1  navbar-menu   hidden lg:flex justify-between items-center gap-4  text-secondaryText ${openMenu ? 'isOpen' : ''}`}> 
            <div className=' flex'>
                <div className={` user-info pl-6 pr-2 py-[8px]    ${nameLeght ?  '-mx-20' : 'md:-mx-7 2xl:absolute 2xl:top-3 2xl:right-52' }` }>
                  <p className='text-secondaryText border-2 rounded-full pl-2 pr-2 text-[16px] lg:text-[18px] flex'>{fullname} 
                    <span className='font-bold'><AiOutlineDown className='-rotate-90 mt-[5.5px] h-4 w-4 text-md !font-bold text-red-700 mx-1' /></span></p>
                </div>
              
             
            
                <div className='absolute  -top-5 right-3 md:top-3  2xl:right-16 2xl:top-3  '>
                  <button
                    className='w-full py-2 text-black  text-start px-4'
                    onClick={() => logout(() => navigate('/login'))}
                  >
                   <CiPower className='text-3xl hover:font-bold text-gray-500 hover:text-primary ' />
                  </button>
                </div>
                <div>
               <IoIosNotificationsOutline className={`text-2xl absolute  right-16 md:right-16    -top-3 md:top-3 md:mt-3 2xl:right-32 2xl:top-3`} />
                </div>
                <div className={`col-span-1 md:hidden   items-center justify-center flex absolute top-6  right-32 md:right-60`}>
                <span className='border-2 rounded-full  p-1 md:p-2 text-sm md:text-md '> Centro de ayuda</span> 
                </div>
          
            </div>
          </div>
          <button
            className="navbar-toggle hidden"
            onClick={handleOpenMenu}
            type='button'
          >
            {
              openMenu ?
                <svg className="icon icon-tabler icon-tabler-x text-primary-900 fill-primary-900 path-primary-900" fill="none" height="44" stroke="#2c3e50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
                  <path className='text-primary-900' d="M0 0h24v24H0z" fill="none" stroke="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
                :
                <svg className="icon icon-tabler icon-tabler-menu-deep text-primary-900 fill-primary-900 path-primary-900" fill="none" height="44" stroke="#2c3e50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="44" xmlns="http://www.w3.org/2000/svg">
                  <path className='text-primary-900' d="M0 0h24v24H0z" fill="none" stroke="none" />
                  <path className='text-primary-900' d="M4 6h16" />
                  <path className='text-primary-900' d="M7 12h13" />
                  <path className='text-primary-900' d="M10 18h10" />
                </svg>
            }
          </button>
        </div>
      </div>

    

     
    </nav>
  )
}

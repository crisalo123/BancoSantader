import type { ReactNode } from 'react'

import { Header } from '../header/Header'
import type { WrapperProps } from '@/core/ui'
import Footer from '../footer/Footer'

type LayoutProps = {
  children: ReactNode
  className?: string
  backButton?: boolean
  wrapperSize?: WrapperProps['size']
  pageSize?: number
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className='min-h-screen bg-primaryBackground-200 !w-full'>
      <Header />
      <div className={`p-0 h-full ${className}  `}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

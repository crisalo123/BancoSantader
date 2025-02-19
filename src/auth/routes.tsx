import { Navigate } from 'react-router-dom'

import type { RouteObject as BaseRouteObject } from '@/core/types' 
import { lazyImport } from '@/core/utils/lazyImport'


const { LoginPage } = lazyImport(() => import('@/pages/loginPage'), 'LoginPage')


type RouteObject = BaseRouteObject & {
  name?: string
}


export const authRoutes: RouteObject[] = [
  {
    name: '',
    path: '/',
    element: <LoginPage />
  },

  {
    name: '',
    path: '*',
    element: <Navigate replace to='/' />
  }
]

export default authRoutes
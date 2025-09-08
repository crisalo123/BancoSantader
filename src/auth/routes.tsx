import { Navigate } from 'react-router-dom'

import type { RouteObject as BaseRouteObject } from '@/core/types' 
import { lazyImport } from '@/core/utils/lazyImport'


const { LoginPage } = lazyImport(() => import('@/pages/loginPage'), 'LoginPage')
const { PropuestaServicios } = lazyImport(
  () => import('@/pages/propuestaServicios/PropuestaServicios'),
  'PropuestaServicios'
)


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
    name: 'Propuesta Servicios',
    path: '/propuesta',
    element: <PropuestaServicios />,
  },

  {
    name: '',
    path: '*',
    element: <Navigate replace to='/' />
  }
]

export default authRoutes
import { CustomRouteObject } from '../core/types/routes'
import { lazyImport } from '../core/utils/lazyImport'





const { HomePage } = lazyImport(() => import('@/pages/homePage/homePage'), 'HomePage')






const adminRoutes: CustomRouteObject[] = [
  {
    name: '',
    path: '/home',
    element: <HomePage />
  },

  {
    name: '',
    path: '/products',
    element:<div>pagina de productosn</div>
  },
]


export default adminRoutes

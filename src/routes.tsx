import React from 'react';
import { useRoutes} from 'react-router-dom';
import { useAuthStore } from './contex/AuthContext';
import authRoutes from '@/auth/routes';
import adminRoutes from '@/user/routes';




export const AppRoutes: React.FC = () => {
  const { isAuthenticated} = useAuthStore()
   console.log(isAuthenticated)


   const roleRoutes = isAuthenticated ? [...authRoutes, ...adminRoutes] : authRoutes

   const routes = useRoutes(roleRoutes)

   return <>{routes}</>



}
import React from 'react';
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from '@/core';
import { AuthProvider } from '@/contex/AuthContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
  <AuthProvider> 
  <BrowserRouter>
  <Suspense fallback={<Spinner />}>{children}</Suspense></BrowserRouter>
  </AuthProvider>

  )
};

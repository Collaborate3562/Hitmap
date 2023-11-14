import React, { useContext } from 'react';
import {Routes as Router, Route, Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Index from './pages/Index';

type Props = {}

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)
  console.log(authenticated);

  if(!authenticated) return <Navigate to='/login' replace />

  return <Outlet />
}

const Routes = (props: Props) => {
  const { authenticated } = useContext(AuthContext)

  return (
    <Router>
      <Route path='/' element={<Index />}/>
      {/* <Route path='/login' element={<Login />}/> */}
      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Router>
  )
}

export default Routes
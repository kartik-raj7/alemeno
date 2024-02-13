import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from './routes';
import { Spin } from 'antd';
import Navbar from './components/common/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from './pages/Errorpage';
import './index.css'

const AppRouter = () => {
  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem('user') != null);
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.user);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    dispatch({ type: 'DELETE_USER'});
    setisLoggedIn(false);
    localStorage.removeItem('user');
  };
  useEffect(()=>{
     if(!user&&localStorage.getItem('user') != null){
         dispatch({type:'SET_USER',payload:JSON.parse(localStorage.getItem('user'))});
     }
  },[])
  return (
    <Router>
      <Suspense fallback={<div className='loaderstyle'><Spin size="large" /></div>}>
        <Routes>
          {routes.map(({ path, component: Component, exact, roles }) => (
                <Route
              key={path}
              path={path}
              element={
                <>
                  <Navbar logOut={logOut}/>
                 {(path === '/' || path === '/home') ? (
                      !isLoggedIn ? <Component roles={roles} logIn={logIn}/> : <Navigate to='/viewcourses'/>
                    ) : (
                      isLoggedIn ? <Component roles={roles} logOut={logOut}/> : <Navigate to='/'/>
                    )
              }
              </>}
              />
            ))}
            <Route path='*' element={<ErrorPage/>} /> 
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

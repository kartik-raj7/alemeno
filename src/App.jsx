import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import AppRouter from './Approuter'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
     <AppRouter/>
     </Provider>
    </>
  )
}

export default App

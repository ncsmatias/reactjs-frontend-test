import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../pages/ Signin';
import { Login } from '../pages/Login';
import { Meting } from '../pages/Meting'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path="/meting" element={<Meting/>}/>
      </Routes>
    </BrowserRouter>
  )
}
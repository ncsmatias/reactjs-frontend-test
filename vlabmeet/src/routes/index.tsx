import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Meting } from '../pages/Meting'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>} />
        <Route path="/meting" element={<Meting/>}/>
      </Routes>
    </BrowserRouter>
  )
}
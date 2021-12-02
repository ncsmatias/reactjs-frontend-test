import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from '../pages/ Signin';
import Meeting from '../pages/Meeting';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path="/meeting" element={<Meeting />}/>
      </Routes>
    </BrowserRouter>
  )
}
import React from 'react';
import { Route, Routes} from "react-router-dom"
import { Index } from './Pages/Index';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
export const AppRoutes = () => {
    return (
<<<<<<< HEAD
=======
        
>>>>>>> 0f3bc77603bdc2a4c931fdd5bee53f0db8765b54
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
<<<<<<< HEAD
=======
       
>>>>>>> 0f3bc77603bdc2a4c931fdd5bee53f0db8765b54
    )
}

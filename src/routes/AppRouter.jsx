import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { FooterSection } from '../components/ui/FooterSection'
import { CatPage } from '../pages/CatPage'
import { Homepage } from '../pages/Homepage'

export const AppRouter = () => {
  
  return (
    <BrowserRouter>

        <Navbar />
        
        <Routes>
            <Route path='/' exact element={<Homepage />} />
            <Route path='cat/:catId' element={<CatPage />} />
        </Routes>

        <FooterSection />

    </BrowserRouter>
  )
}

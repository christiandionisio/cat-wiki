import React from 'react'
import { LandingPage } from '../components/homepage/LandingPage'
import { Navbar } from '../components/ui/Navbar'

export const CatWikiPage = () => {
  return (
    <div className='homepage-screen'>
        <Navbar />
        <LandingPage />
    </div>
  )
}

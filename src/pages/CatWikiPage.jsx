import React from 'react'
import { CatInfoSection } from '../components/homepage/CatInfoSection'
import { FooterSection } from '../components/homepage/FooterSection'
import { LandingPage } from '../components/homepage/LandingPage'
import { Navbar } from '../components/ui/Navbar'

export const CatWikiPage = () => {
  return (
    <div className='homepage-screen'>
        <Navbar />
        <LandingPage />
        <CatInfoSection />
        <FooterSection />
    </div>
  )
}

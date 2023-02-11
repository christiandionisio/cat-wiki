import React from 'react'
import { CatInfoSection } from '../components/homepage/CatInfoSection'
import { LandingSection } from '../components/homepage/LandingSection'
import { FooterSection } from '../components/ui/FooterSection'
import { Navbar } from '../components/ui/Navbar'

export const Homepage = () => {
  return (
    <div className='homepage-screen'>
        <Navbar />
        <LandingSection />
        <CatInfoSection />
        <FooterSection />
    </div>
  )
}

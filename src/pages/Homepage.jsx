import React from 'react'
import { CatInfoSection } from '../components/homepage/CatInfoSection'
import { LandingSection } from '../components/homepage/LandingSection'

export const Homepage = () => {

  return (
    <div className='homepage-screen'>
        <LandingSection />
        <CatInfoSection />
        <p>Agrege un mensaje</p>
    </div>
  )
}

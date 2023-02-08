import React from 'react'
import { CatPageInfoSection } from '../components/catpage/CatPageInfoSection'
import { FooterSection } from '../components/homepage/FooterSection'
import { Navbar } from '../components/ui/Navbar'

export const CatPage = () => {
  return (
    <div className="catpage-screen">
        <Navbar />
        <CatPageInfoSection />
        <FooterSection />
    </div>
  )
}

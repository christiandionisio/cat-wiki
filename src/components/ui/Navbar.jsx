import React from 'react'
import { CatWikiLogo } from '../CatWikiLogo'
import '../../styles/components/ui/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <CatWikiLogo />
        </div>
    </div>
  )
}

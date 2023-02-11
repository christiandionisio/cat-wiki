import React from 'react'
import { CatWikiLogo } from '../CatWikiLogo'
import '../../styles/components/ui/FooterSection.css'

export const FooterSection = () => {
  return (
    <div className="footer-section">
        <div className="logo">
            <CatWikiLogo />
        </div>
        <h6>&#169; created by christiandionisio - devChallenge.io 2023</h6>
    </div>
  )
}

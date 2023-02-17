import React, { useEffect } from 'react'
import { CatWikiLogo } from '../CatWikiLogo'
import '../../styles/components/ui/Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className='navbar'>
        <div className="logo" onClick={() => navigate("/")}>
            <CatWikiLogo />
        </div>
    </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { CatInfoSection } from '../components/homepage/CatInfoSection'
import { LandingSection } from '../components/homepage/LandingSection'
import { fetchCatWiki } from '../helpers/fetch_catwiki'

export const Homepage = () => {

  const getCatWikiData = async () => {
    const resp = await fetchCatWiki('images/search?limit=6&has_breeds=1&size=small', 'GET');
    const body = await resp.json();
    console.log(body);
  }

  useEffect(() => {
    getCatWikiData();
  }, [])
  

  return (
    <div className='homepage-screen'>
        <LandingSection />
        <CatInfoSection />
    </div>
  )
}

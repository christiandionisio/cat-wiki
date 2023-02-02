import React from 'react'
import { CatWikiLogo } from '../CatWikiLogo'

export const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className="row">
            <div className="logo">
                <CatWikiLogo />
            </div>
            <h4>Get to know more about your cat breed</h4>
            <div className="search-input">
                <input type="text" placeholder='Enter your breed' />
                <button>
                    <span class="material-symbols-outlined with-customize">
                        search
                    </span>
                </button>
            </div>
            
        </div>
        <div className="row row-secondary">
            <h6>Most Searched Breeds</h6>

            <h1>66 + Breeds for you to discover</h1>

            <div className="cats-cards">
                <div className="card">

                </div>
            </div>

        </div>
    </div>
  )
}

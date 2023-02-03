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
                    <span className="material-symbols-outlined with-customize">
                        search
                    </span>
                </button>
            </div>
            
        </div>
        <div className="row row-secondary">
            <h6>Most Searched Breeds</h6>
            <hr className='hr-line'/>

            <div className="secondary-title">
                <h1>66 + Breeds for you to discover</h1>
                <a href="">
                    SEE MORE &nbsp;
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                </a>
            </div>

            <div className="cards">
                <div className="cat-card">
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card">
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card">
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card">
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

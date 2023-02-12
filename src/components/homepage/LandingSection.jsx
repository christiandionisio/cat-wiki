import React from 'react'
import { CatWikiLogo } from '../CatWikiLogo'
import '../../styles/components/homepage/LandingSection.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

export const LandingSection = () => {

    const navigate = useNavigate();
    const [bgImageLoaded, setBgImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = require('../../assets/HeroImagelg.png');
        image.onload = () => setBgImageLoaded(true);
    }, []);

    const goToCatPage = () => {
        navigate("/cat/1234");
    }

  return (
    <div className="landing-page">
        <div className={`row bg-image ${bgImageLoaded ? "bg-loaded" : ""}`}
            onLoad={() => setBgImageLoaded(true)}
        >
            <div className="logo">
                <CatWikiLogo />
            </div>
            <h4>Get to know more about your cat breed</h4>
            <div className="search-input">
                <input list='search-cats' type="text" placeholder='Enter your breed' />
                <button>
                    <span className="material-symbols-outlined with-customize">
                        search
                    </span>
                </button>
            </div>

            <div className='dropdown-content'>
                <a href='/cat/1234'>Gato con botas</a>
                <a href='/cat/1234'>Gato Felix</a>
                <a href='/cat/1234'>Gatubela</a>
                <a href='/cat/1234'>Gato con botas</a>
                <a href='/cat/1234'>Gato Felix</a>
                <a href='/cat/1234'>Gatubela</a>
            </div>
            
        </div>
        <div className="row row-secondary">
            <h6>Most Searched Breeds</h6>
            <hr className='hr-line'/>

            <div className="secondary-title">
                <h1>66 + Breeds for you to discover</h1>
                <a href="" className='redirect-link'>
                    SEE MORE &nbsp;
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </a>
            </div>

            <div className="cards">
                <div className="cat-card" onClick={goToCatPage}>
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card" onClick={goToCatPage}>
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card" onClick={goToCatPage}>
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
                <div className="cat-card" onClick={goToCatPage}>
                    <img src={require('../../assets/cat-image-example.jpeg')} alt="" />
                    <h4 className='cat-card-title'>Bengal</h4>
                </div>
            </div>

        </div>
    </div>
  )
}

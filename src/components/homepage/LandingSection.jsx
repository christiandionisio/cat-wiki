import '../../styles/components/homepage/LandingSection.css'
import 'animate.css';
import { CatWikiLogo } from '../CatWikiLogo'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCatWiki } from "../../helpers/fetch_catwiki";

export const LandingSection = () => {

    const navigate = useNavigate();
    const [bgImageLoaded, setBgImageLoaded] = useState(false);
    const [catList, setCatList] = useState([]);

    const getCatWikiData = async () => {
        const resp = await fetchCatWiki('images/search?limit=4&has_breeds=1&size=small', 'GET');
        const body = await resp.json();
        setCatList(body);
    }

    useEffect(() => {
        const image = new Image();
        image.src = require('../../assets/HeroImagelg.png');
        image.onload = () => setBgImageLoaded(true);

        getCatWikiData();
    }, []);

    const goToCatPage = (data) => {
        navigate(`/cat/${data.id}`);
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
                {
                    (catList.length === 0)
                        ? (<div class="spinner"></div>)
                        : catList.map(cat => (
                            <div key={cat.id} 
                                className="animate__animated animate__fadeIn animate__delay-1s cat-card" 
                                onClick={() => goToCatPage(cat.breeds[0])}
                            >
                                <img src={cat.url} alt="" />
                                <h4 className='cat-card-title'> {cat.breeds[0].name} </h4>
                            </div>
                        ))
                }
                
            </div>

        </div>
    </div>
  )
}

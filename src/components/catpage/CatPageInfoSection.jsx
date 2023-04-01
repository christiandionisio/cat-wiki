import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchCatWiki } from '../../helpers/fetch_catwiki';
import  '../../styles/components/catpage/CatPageInfoSection.css'
import { CatFeatureSection } from './CatFeatureSection';
import { CatPhotoSection } from './CatPhotoSection';

export const CatPageInfoSection = () => {

  const location = useLocation();

  const [catData, setCatData] = useState([]);
  

    const getCatWikiData = async () => {
        const pathDataArray = location.pathname.split('/')

        const resp = await fetchCatWiki(`images/search?breed_ids=${pathDataArray[pathDataArray.length-1]}&limit=1&has_breeds=1&size=small`, 'GET');
        const body = await resp.json();
        setCatData(body);
    }

    useEffect(() => {
      getCatWikiData();
    }, [])
    

  return (
    <div className="catpage-info-section">
      {
        (catData.length === 0) 
          ? (<div class="spinner"></div>) 
          : (
            <div className="catpage-main-info">
              <div className="catpage-info-column1">
                <img src={(catData.length === 0) ? 'https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg': catData[0].url} alt="cat_image" />
              </div>
              <div className="catpage-info-column2">
                <h2>{(catData.length > 0)&&catData[0].breeds[0].name}</h2>
                <p>{(catData.length > 0)&&catData[0].breeds[0].description}</p>

                <h6><strong>Temperament: </strong>{(catData.length > 0)&&catData[0].breeds[0].temperament}</h6>
                <h6><strong>Origin: </strong>{(catData.length > 0)&&catData[0].breeds[0].origin}</h6>
                <h6><strong>Life Span: </strong> {(catData.length > 0)&&catData[0].breeds[0].life_span} years</h6>

                {
                  catData.length > 0 && (<CatFeatureSection catDataBreed={catData[0].breeds[0]} />)
                }

              </div>
            </div>
          )
      }

      <CatPhotoSection />
      
    </div>
  )
}

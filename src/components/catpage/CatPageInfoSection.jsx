import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchCatWiki } from '../../helpers/fetch_catwiki';
import  '../../styles/components/catpage/CatPageInfoSection.css'
import { CatPageFeatureLevelRate } from './CatPageFeatureLevelRate';

export const CatPageInfoSection = () => {

  const location = useLocation();

  const [catData, setCatData] = useState([]);
  const [catPhotos, setCatPhotos] = useState([])

    const getCatWikiData = async () => {
        const pathDataArray = location.pathname.split('/')

        const resp = await fetchCatWiki(`images/search?breed_ids=${pathDataArray[pathDataArray.length-1]}&limit=1&has_breeds=1&size=small`, 'GET');
        const body = await resp.json();
        setCatData(body);
    }

    const getCatWikiPhotos = async () => {
      const pathDataArray = location.pathname.split('/')

      const resp = await fetchCatWiki(`images/search?breed_ids=${pathDataArray[pathDataArray.length-1]}&limit=8&has_breeds=0&size=small&mime_types=jpg`, 'GET');
      const body = await resp.json();
      setCatPhotos(body);
  }

    useEffect(() => {
      getCatWikiData();
      getCatWikiPhotos();
    }, [])

    useEffect(() => {
      console.log(catPhotos);
    }, [catPhotos])
    

  return (
    <div className="catpage-info-section">
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

          <div className="catpage-list-features">
              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Adaptability'}
                    featureRate={catData[0].breeds[0].adaptability} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Affection level'}
                    featureRate={catData[0].breeds[0].affection_level} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Child Friendly'}
                    featureRate={catData[0].breeds[0].child_friendly} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Grooming'}
                    featureRate={catData[0].breeds[0].grooming} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Intelligence'}
                    featureRate={catData[0].breeds[0].intelligence} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Health issues'}
                    featureRate={catData[0].breeds[0].health_issues} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Social needs'}
                    featureRate={catData[0].breeds[0].social_needs} 
                    />
                )
              }

              {
                catData.length > 0 && (
                  <CatPageFeatureLevelRate 
                    featureName={'Stranger friendly'}
                    featureRate={catData[0].breeds[0].stranger_friendly} 
                    />
                )
              }

          </div>
        </div>
      </div>
      <div className="catpage-others">
        <h1>Other Photos</h1>
        <div className="list-photos">
          {
            (catPhotos.length > 0) &&
            catPhotos.map(catPhoto => (
              <img 
                key={catPhoto.id}
                src={catPhoto.url} 
                alt="cat_image" 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

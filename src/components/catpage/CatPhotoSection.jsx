import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchCatWiki } from '../../helpers/fetch_catwiki';

export const CatPhotoSection = () => {

    const location = useLocation();
    const [catPhotos, setCatPhotos] = useState([]);

    const getCatWikiPhotos = async () => {
        const pathDataArray = location.pathname.split('/')
        const resp = await fetchCatWiki(`images/search?breed_ids=${pathDataArray[pathDataArray.length-1]}&limit=8&has_breeds=0&size=small&mime_types=jpg`, 'GET');
        const body = await resp.json();
        setCatPhotos(body);
    }

    useEffect(() => {
      getCatWikiPhotos();
    }, [])

    return (
        <div className="catpage-others">
            <h1>Other Photos</h1>
            <div className="list-photos">
                {
                    (catPhotos.length > 0)
                        ? (catPhotos.map(catPhoto => (
                            <img
                                key={catPhoto.id}
                                src={catPhoto.url}
                                alt="cat_image"
                            />
                        )))
                        : (<div class="spinner"></div>)

                }
            </div>
        </div>
    )
}

import { CatRowInfo } from './CatRowInfo'
import  '../../styles/components/cat-search-list/CatList.css'
import { useEffect, useState } from 'react';
import { fetchCatWiki } from '../../helpers/fetch_catwiki';

export const CatList = () => {

  const [catList, setCatList] = useState([]);

  const getCatWikiData = async () => {
    const resp = await fetchCatWiki('images/search?limit=10&has_breeds=1&size=small', 'GET');
    const body = await resp.json();
    setCatList(body);
  }

  useEffect(() => {
    getCatWikiData();
  }, [])
  

  return (
    <div className='cat-list-page'>
        <h1>Top 10 most searched breeds</h1>
        <div className="list">
          {
            (catList.length > 0) 
              ? (catList.map((cat, index) => (<CatRowInfo key={cat.id} catInfo={cat} index={index} />)))
              : (<div className="spinner"></div>)
          }
        </div>
    </div>
  )
}

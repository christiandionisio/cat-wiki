import { useEffect, useState } from 'react'
import  '../../styles/components/cat-search-list/CatRowInfo.css'

export const CatRowInfo = ({catInfo, index}) => {

  const [catInfoBreed, setCatInfoBreed] = useState(catInfo.breeds[0]);

  useEffect(() => {
    console.log(index);
  }, [])
  

  return (
    <div className='cat-search-row'>
        <div className="col-1">
            <img src={catInfo.url} alt="cat-image" />
        </div>

        <div className="col-2">
            <h2>{index+1}. {catInfoBreed.name}</h2>
            <p>{catInfoBreed.description}</p>
        </div>

    </div>
  )
}

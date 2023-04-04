import { useState } from 'react'
import  '../../styles/components/cat-search-list/CatRowInfo.css'
import { useNavigate } from 'react-router-dom';

export const CatRowInfo = ({catInfo, index}) => {

  const [catInfoBreed, setCatInfoBreed] = useState(catInfo.breeds[0]);
  const navigate = useNavigate();

  const goToCatPage = (id) => {
    navigate(`/cat/${id}`);
}
  
  return (
    <div className='cat-search-row animate__animated animate__fadeIn animate__delay-1s'>
        <div className="col-1" onClick={() => goToCatPage(catInfoBreed.id)}>
            <img src={catInfo.url} alt="cat-image" />
        </div>

        <div className="col-2">
            <h2>{index+1}. {catInfoBreed.name}</h2>
            <p>{catInfoBreed.description}</p>
        </div>

    </div>
  )
}

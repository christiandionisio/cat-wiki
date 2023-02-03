import React from 'react'

export const CatInfoSection = () => {
  return (
    <div className='cat-info-section'>

        <div className="column1">
            <hr className='hr-line'/>
            <h1>Why should you have a cat?</h1>
            <p>
                Havin a cat arount you can actually trigger the
                release of calming chemicals in your body which
                lower your stress and anxiety leves
            </p>

            <a href="">READ MORE</a>
        </div>
        <div className="column2">
            <div className="column-img">
                <img src={require('../../assets/image1.png')} alt="image1" />
                <img src={require('../../assets/image2.png')} alt="image1" />
            </div>
            <div className="column-img">
                <img src={require('../../assets/image3.png')} alt="image3" />
            </div>
        </div>
        

    </div>
  )
}

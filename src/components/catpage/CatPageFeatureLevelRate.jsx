import React from 'react'

export const CatPageFeatureLevelRate = ({featureName, featureRate}) => {

  return (
    <div className="catpage-cat-feature">
        <strong>{featureName}:</strong>
        <div className="catpage-level-rate">
            {
                Array.from(Array(5), (e, i) => ((i+1) <= featureRate ) 
                    ? (<div key={`${featureName}_${i}_on`} className="catpage-level catpage-level-active"></div>)
                    : (<div key={`${featureName}_${i}_off`} className="catpage-level"></div>)
                )
            }
        </div>
    </div>
  )
}

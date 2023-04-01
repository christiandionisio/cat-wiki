import { CatPageFeatureLevelRate } from './CatPageFeatureLevelRate'

export const CatFeatureSection = ({ catDataBreed }) => {
    return (
        <div className="catpage-list-features">
            {
                <CatPageFeatureLevelRate
                    featureName={'Adaptability'}
                    featureRate={catDataBreed.adaptability}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Affection level'}
                    featureRate={catDataBreed.affection_level}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Child Friendly'}
                    featureRate={catDataBreed.child_friendly}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Grooming'}
                    featureRate={catDataBreed.grooming}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Intelligence'}
                    featureRate={catDataBreed.intelligence}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Health issues'}
                    featureRate={catDataBreed.health_issues}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Social needs'}
                    featureRate={catDataBreed.social_needs}
                />
            }

            {
                <CatPageFeatureLevelRate
                    featureName={'Stranger friendly'}
                    featureRate={catDataBreed.stranger_friendly}
                />
            }

        </div>
    )
}

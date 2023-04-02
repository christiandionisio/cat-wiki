import { CatRowInfo } from './CatRowInfo'
import  '../../styles/components/cat-search-list/CatList.css'

export const CatList = () => {
  return (
    <div className='cat-list-page'>
        <h1>Top 10 most searched breeds</h1>
        <div className="list">
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
          <CatRowInfo />
        </div>
    </div>
  )
}

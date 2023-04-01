import  '../../styles/components/cat-search-list/CatRowInfo.css'

export const CatRowInfo = () => {
  return (
    <div className='cat-search-row'>
        <div className="col-1">
            <img src="https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg" alt="cat-image" />
        </div>

        <div className="col-2">
            <h2>1. Bengal</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Temporibus similique sequi voluptatem a mollitia quasi. 
              Aliquid consequuntur sequi accusamus, veritatis at corrupti, 
              commodi nihil quis, odit nemo debitis voluptatum libero.
            </p>
        </div>

    </div>
  )
}

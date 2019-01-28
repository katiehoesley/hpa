import React from 'react'; 
import WelcomeBar from './WelcomeBar.jsx';
import SortBy from './SortBy';
import PageChange from './PageChange.jsx'

const AllProducts = ( props ) => {

    const { pageNum, data, user, checkUsers, loggedInUsers, handleSort, nextPage, prevPage, selectProduct } = props; 

    let three = data.slice( pageNum,  pageNum+25)
    
    const productData = three.map((product) => {
        return(
            <div className="productDetails" onClick={ selectProduct }>
                <div id={product.advertisement_id} >
                    <div id='title'>{ product.title }</div>
                    <img id="image" src={ product.media[0].sizes[5].url }/>
                    <div id='description'>{ product.description }</div>
                    <div id='price'>${ product.price } USD</div>
                    <div id='seller'>For sale by { product.seller.first_name } { product.seller.last_name }</div>
                </div>   
            </div>
        )
    })

    return (
        <div>
            <WelcomeBar user={ user } checkUsers={ checkUsers } loggedInUsers={ loggedInUsers }/>
            <SortBy handleSort={ handleSort } />
             <div className='full-page' >
                { productData }
            </div>
            <PageChange nextPage={ nextPage } prevPage={ prevPage } />
        </div>
    )
}

export default AllProducts;



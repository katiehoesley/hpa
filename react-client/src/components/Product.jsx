import React from 'react'; 

const Product = ( props ) => {

    const { product, returnToMain } = props 
    const { media, title, description, price, product_id, seller, timestamp } = product[0]; 
    const { first_name, last_name } = seller; 

    const date = timestamp;
    const year = date.split('-')[0]
    const month = date.split('-')[1]
    const day = date.split('-')[2].slice(0, 2)
    const newDate = `${ day }-${ month }-${ year }`
    
    return(
        <div className="single-product">
            <img id="image" src={ media[0].sizes[4].url } />
            <div className='info'>
                <div id='title'>{ title }</div>
                <div id='description'>{ description }</div>
                <div id='price'>${ price } USD</div>
                <div id='productid'>Product ID: { product_id }</div>
                <div id="time">Date listed: { newDate }</div>
                <div id='seller'>Item listed by { first_name } { last_name } on { newDate }</div>
            </div>
            <button onClick={ returnToMain }>
                Go Back to Main Page
            </button>
        </div>
        
    )
}

export default Product;

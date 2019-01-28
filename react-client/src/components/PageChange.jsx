import React from 'react'; 

const PageChange = ( props ) => { 

    const { prevPage, nextPage } = props; 

    return(
        <div className='bottom-nav'>
            <button id='last' onClick={ prevPage }>
                Previous Page
            </button>  
            <button id='next' onClick={ nextPage }>
                Next Page
            </button>
         </div>
        )   
}

export default PageChange;
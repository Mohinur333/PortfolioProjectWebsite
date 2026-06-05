import React from 'react'
import {useNavigate } from 'react-router-dom';

import Paginate from '../components/Pagination'
import { useProduct } from '../store/useProduct';




const Right = ({products}) => {
   const navigate = useNavigate()
 
  const {
    searchValue,
     sortValue,
     currentPage,
     offset,
     limit,
     setCurrentPage,
     setOffset,
     setSortValue,
     setSearchValue

    } = useProduct()

  const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase() ));

  const sortedProducts = [...filteredProducts];

if (sortValue === "price__asc") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sortValue === "price__desc") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

const onPageChange = (page) => {
    
setCurrentPage(page)
setOffset(page * limit - limit)
}

const paginated = sortedProducts.slice(
  offset,
  offset + limit
)


    return (
      <>
<div className="right">
       <h2 className="right__title">All Products</h2>
       <div className="right__border"></div>
         <div className="right__mainbox">
            {paginated.map((product) => (
                <div className="right__box" key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                >
                
                  <div className="right__box-img">
                <img className='right__box-img2'
                src={product.thumbnail}
                alt={product.title} 
                 />

                 </div>
                 
                 <div className="right__box-dec">
                  <h2 className="right__box-dec-title">{product.title}</h2>
                 <p className="right__box-dec-text">{product.description}</p>
                 <div className="right__box-dec-prices">
                 <p className="right__box-dec-price">Discount: {product.price}$</p>
                    <p className="right__box-dec-dprice">Discounted price: {product.discountPercentage}$</p>
                    <span className="right__box-prices-span">In stock: {product.stock}</span>
               
                    </div>
                   <button className="right__btn">Delete</button>
                 </div>
               </div>
            ))}
         </div>
         {products && 
         <Paginate
         count={sortedProducts.length}
         limit={limit}
         onPageChange={onPageChange}
         currentPage={currentPage}
         />
        }
         </div>
      </>
    )
            
  }
  
  export default Right
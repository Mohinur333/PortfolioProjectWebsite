import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SingleProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading product...</div>;

  return(
    
    <div className="product">
      <button className="back" onClick={() => navigate("/")}>
        Back</button>
<div className="product__all">

<div className="product__right">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    slidesPerView={1}
  >
    {product.images.map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image}
          alt={product.title}
          className="product__right-img"
        />
      </SwiperSlide>
    ))}
  </Swiper> 
</div>

    <div className="products__left">
    <h3 className="product__left-title">{product.title}</h3>
  <p className="product__left-text">{product.description}</p>
  <div className="product__left-prices">
  <p className="product__left-price">Discount: {product.price}$</p>
  <p className="product__left-dprice">Now: {product.discountPercentage}</p>
        </div>
  <p className="product__left-brand">Brand: {product.brand}</p>
  <span className="product__left-span">Rating: + {product.rating}</span>
    </div>
    </div>

    <div className="feedback">
<h3 className="feedback__title">Customer Reviews</h3>
  {product.reviews.map((review) => (
         <div className="feedback__rating" key={review.reviewerName}> 
         <div className="feedback__date">
             <h3 className="feedback__rating-name">{review.reviewerName}</h3>
         <span className="feedback__rating-span2">{review.date}</span> 
             </div>
             <span className="feedback__rating-span">{review.rating} +</span>
              <p className="feedback__rating-rating">{review.comment}</p>  
           </div>
           ))}
    </div>
    </div>

  );
};

export default SingleProduct;
  
  







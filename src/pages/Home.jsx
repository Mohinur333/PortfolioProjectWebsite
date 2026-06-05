import React, { useState } from 'react'
import { useEffect } from 'react'
import Left from '../components/Left'
import Right from '../components/Right'

const Home = () => {
    const [products, setProducts] = useState([])
    const[searchValue, setSearchValue] = useState('')

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getProducts = async () => {
        try {
            let res = await 
           fetch('https://dummyjson.com/products?limit=100')
            let data = await res.json()

            setProducts(data.products)
        } catch (error) {
            console.log(error);
            setError("Failed to load products")
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        setError(null)
        getProducts()
    }, [])

    if (loading) return <div>Loading...</div>;

if (error) return <div style={{ color: "red" }}>{error}</div>;
    return (
      <>
      <div className="home">
      <Left/>
         <Right
          products={products}
          
          />
          
          </div>
      </>
    )
    
  }
  
  export default Home
  
  
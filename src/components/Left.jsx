import React from 'react'
import Sort from './Sort'

const categories = [
    "All products",
    "Beauty",
    "Fragrances",
    "Furnitiure",
    "Groceries",
    "Home Decoration",
    "Laptops"


];


const Left = () => {

    return (
      <>
         <div className="sidebar">
            <div className="sidebar__category">
                <h2 className="sidebar__title">Category</h2>
                <ul className="sidebar__list">
                    {categories.map((index,item) =>(
                        <li key={item} className="sidebar__list">
                            <a href="#" className="sidebar__links">{index}</a>
                        </li>
                    ))}
                </ul>
                <div className="sidebar__left">
                <Sort/>
                </div>
            </div>
         </div>


         </>
    )
    
  }
  
  export default Left
  
  
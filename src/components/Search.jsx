import React from 'react'
import searchIcon from '/public/images/search.svg'

import { useState } from 'react'
import { useProduct } from '../store/useProduct'

const Search = () => {
  const {setSearchValue} = useProduct()
const [value, setValue] = useState('')

const reset = () => {
setValue('')
setSearchValue('')
}

const submit = (event) => {
event.preventDefault()
setSearchValue(value)
}


    return (
      <>
      <form className="form" onSubmit={(event) => submit(event)}>
        <div className="form__box">
            <input 
            type="text" 
            className="form__box-input" 
            placeholder='Search...'
            value={value}
            onChange={(event) => {
              setValue(event.target.value); setSearchValue(event.target.value)
            }}
            />
            <div className="form__box-buttons">
            <button className="form__box-btn" onClick={() => reset()}>
              x
              </button>
        <button className="form__box-btn">
            <img src={searchIcon} alt=""  className="form__box-img" />
        </button>
        </div>
        </div>
        
      </form>
         </>
    )
    
  }
  
  export default Search
  
  
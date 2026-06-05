import React from 'react'
import Select from 'react-select'
import { useProduct } from '../store/useProduct'

const options = [
  { value: '', label: 'Sort by name' },
  { value: 'price__asc', label: 'Sort by price' },
  { value: 'price__desc', label: 'Sort by quantity' }
]
const Sort = () => {
  const changeOption = (option) => {
    setSortValue(option.value)
  }

  const {setSortValue} = useProduct()
    return (
      <>
      <div style={{width:200}} className="style">
        <Select 
        onChange={changeOption}
        options={options} 
        placeholder="Sort:"
        />
        </div>
      </>
    )
    
  }
  
  export default Sort
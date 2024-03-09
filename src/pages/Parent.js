import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [data, setData] = useState({});

    const fromChildToParent = (data)=>{
        setData(data)
    }
  return (
    <div>
      <h1>Parent Component: </h1>
        
      <p>name: {data.name}</p>
      <p>age: {data.age}</p>
      <Child func = {fromChildToParent} />
    </div>
  )
}

export default Parent

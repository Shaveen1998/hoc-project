import React, { useState } from 'react'

function Child({func}) {
    const [childData, setChildData] = useState({
        name:null,
        age:null,
    })

    const onAgeChange = (e)=>{
        setChildData({...childData, age:e.target.value})
    }

    const onNameChange = (e)=>{
        setChildData({...childData, name:e.target.value})
    }

    const onParse = ()=>{
        func(childData)
    }
  return (
    <div>
      <h1>Child Componenet</h1>
      <input type="text" placeholder='name' onChange={onAgeChange}/>
      <input type="text" placeholder='age' onChange={onNameChange}/>

      <button onClick={onParse}>Submit</button>
    </div>
  )
}

export default Child

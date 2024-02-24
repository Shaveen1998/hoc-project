import React, { useRef, useState } from 'react'

function Form() {

    const [formData, setFormData] = useState({
    })

    const numberRef = useRef(0)
    const handleChange = (e)=>{
        
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        console.log(formData, numberRef.current.value)
        e.preventDefault()
    }

  return (
    <div>
      <h1>Forms in React</h1>
      <form action=""  onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='name' onChange={handleChange}/>
      <input type="text" placeholder='email' name='email' onChange={handleChange}/>
      <input type="password" placeholder='password' name='password' onChange={handleChange}/>
      <input type="number" name="number" id="" ref={numberRef} />
     <button>Submit</button>
      </form>

      <div>
            {formData.name}
            <br />
            {formData.email}
            <br />
            {formData.password}
      </div>
      
    </div>
  )
}

export default Form

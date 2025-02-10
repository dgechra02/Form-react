import React, { useEffect, useState } from 'react'
import './Form.css'

function Form() {
  // to save the input values i used useState 
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("registered");
  }, [flag])

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }


  // *** meaning of above notations 
  // Spread Operator (...inputData) : keep the previous state, 
  // This copies all the existing properties from inputData into the new object.
  // This ensures we don’t lose previous state values when updating just one field.

  // 'Dynamic Key [e.target.name]: e.target.name refers to the name attribute of the input field being changed.
  // 'e.target.value': and store this value at that key, || Assigning the New Value

  console.log(inputData);
  return (
    <div className="container">
      <pre className='pre'>{(flag) ? <h2>Hello {inputData.name}, you've registered successfully</h2> : ""}</pre>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='heading'>
          <h1>Registration Form</h1>
        </div>
        <div className="name">
          <input type="text" placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData} />
        </div>
        <div className="email">
          <input type="email" placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData} />
        </div>
        <div className="password">
          <input type="password" placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData} />
        </div>
        <div className='submit-btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Form

// *** important points to note

// e.target.value is NOT reading from value={inputData.name}.
// Instead, it is reading from what the user types in the input field.
// value={inputData.name} only ensures that the input field always matches the state.



// Why Do We Need value={inputData.name}?
// If we remove value={inputData.name}, React won't control the input field anymore. The browser will handle it normally, but React won't be able to update or track the value.
// This is why we say that React controls the input field through state.
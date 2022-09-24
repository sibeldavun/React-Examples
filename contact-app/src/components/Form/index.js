import React from 'react'
import {useState} from "react";

function Form({contacts, setContacts}) {
    const [inputs, setInputs] = useState({
        fullName:"",
        phoneNumber:"",
    })

    const changeInput = ((event)=>{
        setInputs({...inputs, [event.target.name]: event.target.value})
    })

    
    const submitForm = ((event)=>{
        event.preventDefault();
        if (inputs.fullName === "" && inputs.phoneNumber ==="") {
            alert ("Lütfen adınızı ve numaranızı giriniz!")
    
        } else {
            setContacts([...contacts, inputs]);
        }
        
    })

  return (
    <div>
        <form onSubmit={submitForm}>
            <input name='fullName' value={inputs.fullName} onChange={changeInput}/> <br /><br />
            <input name='phoneNumber' value={inputs.phoneNumber} onChange={changeInput}/>  <br /><br />
            <button type='submit'>Submit</button>
        </form>

       


    </div>
  )
}

export default Form
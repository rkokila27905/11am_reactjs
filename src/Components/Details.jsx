import React, { useState } from 'react'

export default function DetailsForm() {

    const [name, setname] = useState("")
    const [age, setage] = useState("")

        const [isshow, setisshow] = useState(false)






    const handleage = (e) => {

        setage(e.target.value)

    }

    return (
        <div>


            <label>Name: </label>

            <input placeholder='enter' onChange={(e)=>setname(e.target.value)} />

            <br />

            <br />

            <label>Age: </label>

            <input placeholder='enter' onChange={handleage} />

            <br />
            <button onClick={()=> setisshow(true)}>Save </button>


            <br />
            <br />
{isshow ? 
<div>
            <h1>Name : {name}</h1>

            <h1>age : {age}</h1>
</div>

:null }



        </div>
    )
}
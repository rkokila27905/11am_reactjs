import React, { useEffect, useState } from 'react'

export default function CardOne() {

    const [apidata, setapidata] = useState([])


    const handleapi = async () => {
        let res = await fetch("https://fakestoreapi.com/products")
        let b = await res.json()
        setapidata(b)
    }

    useEffect(()=>{
        // handleapi()

        console.log("sanji");
        

    },[])


    return (
        <div>
            {/* <button onClick={handleapi}>Call Api</button> */}

            {apidata.map((obj) => (
                <div>
                    <h1>{obj.title}</h1>
                </div>
            ))}

            

        </div>
    )
}
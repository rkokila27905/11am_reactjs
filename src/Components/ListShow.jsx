import React, { useState } from 'react'




export default function ListShow() {
    const [data, setdata] = useState([
        {
            Name: "Luffy",
            age: 25,
            role: "Captain"
        },
        {
            Name: "Zoro",
            age: 26,
            role: "SwordMan"
        },
        {
            Name: "Sanji",
            age: 26,
            role: "Chef"
        },
        {
            Name: "chopper",
            age: 21,
            role: "Doctor"
        },

    ])

    return (
        <div>

            {/* <h1>{data[1].Name}</h1> */}

            {data.map((da) => (
                <div>
                    <h1> Name: {da.Name}</h1>
                    <h2> Age : {da.age}</h2>
                </div>
            ))}





        </div>
    )
}
import React, { useEffect, useState } from 'react'

export default function ConceptTwo() {
  const [count, setcount] = useState(0)

  // useEffect(() => {
  //   console.log("mounting 1");

  //   // return ()=>{
  //   //   console.log("unmounting");      
  //   // }


  // }, [count])

  const handleadd = () => {
    
    setcount((prev) => prev + 1)
    setcount((prev) => prev + 1)
    setcount((prev) => prev + 1)


  }

  return (
    <div>
      <h1>Concept  -{count}</h1>
      <button onClick={handleadd}>Add</button>



    </div>
  )
}
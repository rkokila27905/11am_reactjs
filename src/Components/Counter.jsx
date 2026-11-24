import{ useState } from "react"

function Counter(){

    const [count]=useState(1)

    const handleadd = () => {
      if(count ==10){
        setcount(0)
      }else{
        setcount(count+1)
      }
    }
    
    return(
        <>
<h1>Count - {count}</h1>

<button onClick={handleadd}>Add</button>


        </>
    )
}

export default Counter
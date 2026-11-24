import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function GroceryList() {
  const [apidata, setapidata] = useState([]);
  const [item,setitem ] = useState("")

  const handlefetch = async () => {
    let res = await axios.get("http://localhost:3000/grocerrylist");
    console.log(res.data);
    
    setapidata(res.data);
  };

  useEffect(() => {
    handlefetch();
  }, []);


  const handleadd = async () =>{
    
    let data  = {
      item : item
    }

    let res = await axios.post("http://localhost:3000/grocerrylist",data)

    console.log(res);
     handlefetch();

     setitem("")

  }

  const handledelete = async (del_id) =>{
    console.log("hey i am delete",del_id);

    let res = await axios.delete("http://localhost:3000/grocerrylist/" + del_id )

    handlefetch();
    
  }


  const handleedit = async (data) =>{
    console.log(data);

    let upitem = prompt("enter u r updated item",data.item)

    let body = {
      item : upitem,
      id : data.id,
      if: "ahyeyey"
    }


    let res =await axios.put("http://localhost:3000/grocerrylist/" + data.id, body)
    handlefetch();


    
  }

  return (
    <div>
      <h1>Grocery List</h1>

      <input onChange={(e)=>setitem(e.target.value)} placeholder="Enter" className="ms-3" />

      <button onClick={handleadd} className="btn btn-primary ms-3">Add</button>


{/*   
        <button className="ms-4 ar"><FaEdit /></button>
        */}

      <ol>
        {apidata.map((da) => (
          <div>
            <li>{da.item}</li>
              <button onClick={()=>handleedit(da)} className="ms-4 ar"><FaEdit /></button>
              <button onClick={()=>handledelete(da.id)} className="ms-4 ar"><MdDelete /></button>

          </div>
        ))}
      </ol>
    </div>
  );
}
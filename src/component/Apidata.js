import React, {useEffect, useState,useContext } from "react";
import axios from "axios";
import { MyContext } from "./ContextUser";


function Apidata() {
  const { updateValue } = useContext(MyContext);
  const [data, setdata] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function ondelete(id){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  let OnEdit=(id)=>{
    updateValue(id)

  }
  

  return (
    <>
      <div className="container">
        {data&&
        data.map((res)=>( 
            <div className="card" key={res.id}>
            <div className="card-body">
              <h5 className="card-title">{res.title}</h5>
              <p className="card-text">
               {res.body}
              </p>
              <button className="btn btn-primary" onClick={()=>{OnEdit(res.id)}}>Edit</button>
              <button className="btn btn-danger mx-4" onClick={()=>{ondelete(res.id)}}>Delete</button>
            </div>
          </div>
        ))
          
        }
      </div>
    </>
  );
}

export default Apidata;

import React, {useState,useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "./ContextUser";
function Listform() {
  let  { myValue } = useContext(MyContext);
  const [title,settitle]=useState('')
  const [body,setbody]=useState('')
  function SubmitData(){
    let paylod={
      title:title,
      body:body
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",paylod).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)

    })
    settitle('')
    setbody('')
  } 

  useEffect(()=>{
    if(myValue>=1){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${myValue}`).then((res)=>{
      settitle(res.data.title)
      setbody(res.data.body)
    }).catch((err)=>{
      console.log(err)
    })
    }
  },[myValue]) 

  function onUpdate(){
    let paylod={
      title:title,
      body:body
    }
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${myValue}`,paylod).then((res)=>{
        console.log("res",res)
      }).catch((err)=>{
        console.log('err',err)
  
      })
    settitle('')
    setbody('')
  } 
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <h1><strong>Title</strong></h1>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="title"
          value={title}
          onChange={(e)=>{settitle(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>List To Do</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          name="body"
          value={body}
          onChange={(e)=>{setbody(e.target.value)}}
        ></textarea>
        {
          myValue!==''? <button className="btn btn-primary my-3" onClick={onUpdate}>Update</button>:<button className="btn btn-primary my-3" onClick={SubmitData}>Add</button>
        }
      </div>
    </>
  );
}

export default Listform;

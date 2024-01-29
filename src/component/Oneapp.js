import React, { useState } from "react";

function Oneapp() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [list, setlist] = useState([
    {
      id: 1,
      title: "",
      body: "",
    },
  ]);
  function SubmitData() {
    const newData = [...list, { id: list.length +1, title, body }];
    setlist(newData);
    settitle("");
    setbody("");
  }
  const OnEdit=(id)=>{
    let a=list.filter((res)=>{return res.id===id})
    setbody(a[0].body)
    settitle(a[0].title)
  }
  const handleDelete = (id) => {
    const newData =list.filter(item => item.id !== id);
    setlist(newData);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <h1>
              <strong>Title</strong>
            </h1>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>
              <strong>TodoList</strong>
            </h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            name="body"
            value={body}
            onChange={(e) => {
              setbody(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={SubmitData}>
          Add
        </button>
      </div>
      <div className="container mt-5">
        {list.length > 1 ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {list &&
                  list.map((res, index) => (
                    <tr key={res.id}>
                      <th scope="row">{index}</th>
                      <td>{res.title}</td>
                      <td>{res.body}</td>
                      <td><button className="btn btn-primary" onClick={()=>{OnEdit(res.id)}}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={()=>{handleDelete(res.id)}}>Delete</button></td>
                    </tr>
                  
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h1>No data available</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Oneapp;

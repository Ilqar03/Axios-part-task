import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function ProductPage() {
    const [data, setData] = useState([]);
   

  
  

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((response) => {
      setData(response.data);
    },[]);
    
    
  });
  const deletefunc=(id)=>{
    axios.delete(`http://localhost:3000/categories/${id}`)
    .then(() => setData(data));
}

  return (
    <div>
        <NavLink to={"/addpage"}>AddPage</NavLink>
      {data.map((x) => (
        <div key={x.id}>
          <p>{x.id}</p>
          <h3>{x.description}</h3>
          <h3>{x.category}</h3>
          <button onClick={()=>deletefunc(x.id)}>Delete</button>
          <Link to={`/detailpage/${x.id}`}><button>Detail</button></Link>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;

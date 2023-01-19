import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

function DetailPage() {
    const [data, setData] = useState([]);
    const {id}=useParams();

    useEffect(() => {
      axios.get(`http://localhost:3000/categories/${id}`).then((response) => {
        setData(response.data);
      });
    },[id]);
  
    return (
      <div>
        <Helmet><title>{data.companyName}</title></Helmet>
          <div>
            <p>{data.id}</p>
            <h3>{data.description}</h3>
            <h3>{data.category}</h3>
           
            <Link to={"/"}><button>back</button></Link>
          </div>
      </div>
    );
}

export default DetailPage
import axios from 'axios';
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

function AddPage() {
    
  return (
    <Formik
    initialValues={{ category: '', description: '' }}
    validationSchema={Yup.object({
        category: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        description: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      
    })}
    
    onSubmit={(values) => {
        axios.post("http://localhost:3000/categories",values)
    }}
  >
    <Form>
      <label htmlFor="category">category</label>
      <Field name="category" type="text" />
      

      <label htmlFor="description">description</label>
      <Field name="description" type="text" />
      

      <button type="submit">Submit</button>
      <Link to={"/"}><button>back</button></Link>
    </Form>
  </Formik>
  )
}

export default AddPage
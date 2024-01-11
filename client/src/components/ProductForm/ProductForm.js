import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';
import axios from 'axios';



const ProductForm = () => {
  
   const [title, setTitle] = useState(""); 
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");
   
   const onSubmitHandler =  (e) => {
       console.log("++++++++++", title);
       
       e.preventDefault();
       
       axios.post('http://localhost:8000/api/products', {
           title,    
           price ,     
           description      
       })
           .then(res=>{
               console.log(res); 
               console.log(res.data);  
           })
           .catch(err=>console.log(err))
   }
   
   return (
      <div className="ProductForm">
         <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
           <div className='field'>
               <label>title :</label><br/>
               <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
           </div>
           <div className='field'>
               <label>price :</label><br/>
               <input type="number" onChange = {(e)=>setPrice(e.target.value)}/>
           </div>
           <div className='field'>
               <label>description :</label><br/>
               <textarea name="" id="" cols="2" rows="2" onChange = {(e)=>setDescription(e.target.value)}></textarea>
           </div>
           <input value="create" className='btn btn-primary' type="submit"/>
        </form>

      </div>
   )
};
  
ProductForm.propTypes = {};

ProductForm.defaultProps = {};

export default ProductForm;

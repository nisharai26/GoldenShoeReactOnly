import React ,{useState} from 'react';
import Product from './Product';



const Home = (props) => {
    const {products, onAdd} = props;
    
    return (    
     <div className = "block col-2">
    <h1>Golden Shoe</h1>
  
    {products.map((product) => (
          <Product key={product._id} product={product} onAdd={onAdd}></Product>
        ))}
        
  


</div>
    );
}
export default Home;
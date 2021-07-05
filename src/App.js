import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Basket from './components/Basket';
import Footer from './components/Footer';
import data from './data';
import {useState} from 'react';

function App (){
const {products} = data;
const [cartItems,setCartItems] = useState([]);
const onAdd = (product)=>{
  const exist = cartItems.find(x=> x._id == product._id);
  if(exist){
    setCartItems(cartItems.map(x=>x._id === product._id ?{...exist,qty:exist.qty +1} :x ));

  } else {
    setCartItems([...cartItems ,{...product ,qty : 1}]);
  }
};
const onRemove = (product)=>{
  const exist = cartItems.find((el)=>el._id === product._id);
  if(exist.qty === 1){
    setCartItems(cartItems.filter((el)=> el._id !== product._id));
  } else {
    setCartItems(cartItems.map(x=>x._id === product._id ?{...exist,qty:exist.qty - 1} :x ));
  }
};
    return(
      <React.Fragment>
        <Navbar />
       
        <Home onAdd = {onAdd} products ={products}/>
        <Basket onAdd = {onAdd} onRemove = {onRemove} cartItems ={cartItems}></Basket>
      
      <Footer/>
      </React.Fragment>
) 
    } 
export default App;

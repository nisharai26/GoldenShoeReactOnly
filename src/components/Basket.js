
import React from 'react';

const Basket = (props) => {
    const {cartItems, onAdd,onRemove} = props;
    const itemsPrice = cartItems.reduce((total, current) => total + current.qty * current.cost, 0);
    return (
        <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key = {item._id} className = "row">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick ={()=>onAdd(item)} className="Add">+</button>
                        <button onClick ={()=>onRemove(item)} className="Remove">-</button>
                       
                    </div>
                    <div className="col-2 text-right">
              {item.qty} * £{item.cost}
            </div>
                    </div>
    ))}
         {cartItems.length !== 0 && (
          <>
            <hr></hr>

           
              
             <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right"><strong>Total Price</strong></div>
              <div className="col-1 text-right">
                <strong>£{itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            
    
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
    
        </aside>
    )
}
export default Basket;
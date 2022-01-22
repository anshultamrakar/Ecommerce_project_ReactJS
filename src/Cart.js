import Pricing from "./Pricing"
import { useContext } from "react"
import DataContext from './Context/DataContext'

const Cart = () => {

    const {cartItems, removeCartItems, incrementQty , decrementQty} = useContext(DataContext)

    return (
        <main className = "cart">
          <section>
            <h2 className="cart-count"> Your Cart Items : {cartItems.length} </h2>
           <ul className="product_items"> 
              {
                  cartItems.map((item) => (
                      <li key = {item.id}> 
                        <img src={item.imgUrl}></img>
                        <p> {item.item}</p>
                        <p> {item.description}</p>
                        <p> Rs {item.price} <small style = {{ textDecoration :"line-through"}}>Rs.1200</small>
                        <br/>
                        <i style = {{color : "red"}}> (50% OFF)</i> </p>
                        <div className="cart_btn">
                        <button onClick={() => incrementQty(item.id)} >+</button> 
                        <p>Qty : {item.quantity}</p>
                        <button disabled = {item.quantity === 1 } onClick={() => decrementQty(item.id)}>-</button> 
                        </div>
                        <hr/>
                        <button className="cart_btn"  onClick={() => removeCartItems(item.id)}> Remove </button>
                      </li>
                  ))
              }
          </ul>
          </section>
          <Pricing/>
          
        </main >
    )
}

export default Cart

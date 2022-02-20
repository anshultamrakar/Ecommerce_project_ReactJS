import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from "./Context/DataContext"

const Pricing = () => {    
  const {cartItems} = useContext(DataContext)

  const totalPrice = () => {
    let sumPrice = 0 ;
    cartItems.forEach((item) => {
      sumPrice += item.price * item.quantity
    })
    return sumPrice;
  }

  const totalQuantity = cartItems.reduce((acc , value) => acc + value.quantity , 0)


   
    return (
        <div className="cart_pricing" >
          
          <h1>Card Details</h1>
            <p> Total quantity : {totalQuantity} </p>
            <p> Price : Rs. {totalPrice()} </p>
            <a href='address'>
              <button>
              Proceed to buy
          </button>
          </a>

        </div>
        
    )
}

export default Pricing

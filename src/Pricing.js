import { useContext } from "react"
import DataContext from "./Context/DataContext"

const Pricing = () => {    
  const {cartItems} = useContext(DataContext)


  const finalPrice = cartItems.map((item) => item.price)
  const totalPrice = finalPrice.reduce((acc , value) => acc + value )
  console.log(finalPrice)
  console.log(totalPrice)
 
   
    return (
        <div className="cart_pricing" >
          
          <h1>Card Details</h1>
            <p> Total quantity : {cartItems.length} </p>
            <p> Price : Rs. {totalPrice} </p>
            <p> Discount : Rs. - 40 </p>
        

            <button> Proceed to buy</button>
        </div>
        
    )
}

export default Pricing

import { useContext } from "react"
import DataContext from "./Context/DataContext"

const Pricing = () => {    
  const {cartItems} = useContext(DataContext)
   
    return (
        <section >
            <h2>Card Details</h2>
                       <h4> Quantity:  {cartItems.length}</h4>
                       <h4> Price:  </h4>
        </section>
        
    )
}

export default Pricing

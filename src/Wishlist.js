import { useContext } from "react"
import DataContext from './Context/DataContext'

const Wishlist = () => {
    const { wishItems , handleCartItems, removeWishItems} = useContext(DataContext)
    return (
        <main className="product-page">
            <div className="wishlist_container">
          <h2 className="wishCount"> Your Wishlist : {wishItems.length}</h2>
          <ul className="product_items"> 
              {
                  wishItems.map((item) => (
                      <li key = {item.id}> 
                        <button className="cross_btn" onClick={() => removeWishItems(item.id)}> x </button>
                        <img alt = "product-image" src={item.imgUrl} ></img>
                        <p> {item.description}</p>
                        <p> {item.price} <small style = {{ textDecoration :"line-through"}}>Rs.1200</small>
                        <br/>
                        <i style = {{color : "red"}}> (50% OFF)</i> </p>
                        <button className="cart_btn" onClick={() => handleCartItems(item)} > 👜 Move to cart </button>
                      </li>
                  ))
              }
          </ul>
          </div>
        </main>
    )
}

export default Wishlist

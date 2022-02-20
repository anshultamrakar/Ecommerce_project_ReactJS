import { useContext, useReducer} from "react"
import DataContext from './Context/DataContext'



const Products = () => {

const {searchResults , handleWishItems } = useContext(DataContext)
    return (
        <main className="product-page">
            <div className='sorting'> 
         <fieldset>
         <legend>Sort By</legend>
         <label>
          <input
            type="radio"
            name="sort"
          ></input>{" "}
          Price - High to Low
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="sort"
          ></input>{" "}
          Price - Low to High
        </label>
         </fieldset>
         <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
          />
          Include Out of Stock
        </label>
<br/>
        <label>
          <input
            type="checkbox"
          />
          Fast Delivery Only
        </label>
      </fieldset>

            </div>
            <ul className='product_items'>
                {searchResults .map((item) => (
                    <li className='product_lists' key = {item.id}>  
                     <img src = {item.imgUrl} alt="image" ></img>
                     <p>{item.item}</p>
                     <p> {item.description}</p>
                     <p> Rs.{item.price} <small style = {{ textDecoration :"line-through"}}>Rs.1200</small>
                     <br/>
                      <i style = {{color : "red"}}> (50% OFF)</i></p>
                     <button className="wish_btn" onClick={() => handleWishItems(item)} > 💙 Add to wishlist</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products


 
                   
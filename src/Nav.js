import { BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHouseDoorFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react"
import DataContext from './Context/DataContext'


const Nav = () => {
    const { wishItems, cartItems, search , setSearch} = useContext(DataContext) 
    return (
        <nav className="Nav">
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
               <label htmlFor="search"> Search</label>
               <input 
                  type = "text"
                  placeholder="Search"
                  value = {search}        
                  onChange={(e) => setSearch(e.target.value)}
               />
               <ul className="icons">
                   <li><Link to = ""><BsFillHouseDoorFill/> </Link></li>
                   <li> <Link to = "cart"> <BiCartAlt/> </Link>  <span className="notify">{cartItems.length}</span> </li>
                   <li> <Link to = "wishlist"> <AiOutlineHeart/>  </Link> <span className="notify">{wishItems.length}</span></li>
               </ul>
           </form>
        </nav>
    )
}

export default Nav

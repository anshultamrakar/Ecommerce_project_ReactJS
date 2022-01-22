import {createContext , useState , useEffect} from 'react'


const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [products , setProducts] = useState([
        {
            id: 1,
            imgUrl: "https://placeimg.com/200/300/any",
            item: " Product One  ",
            description: " Best in the world ",
            price: 847,
            quantity : 1
          },
          {
            id: 2,
            imgUrl: "https://picsum.photos/200/300",
            item: " Product Two ",
            description: " Best in the world ",
            price: 907,
            quantity : 1
          },
          {
            id: 3,
            imgUrl: "https://picsum.photos/200/300?random=3",
            item: " Product Three ",
            description: " Best in the world",
            price: 965,
            quantity : 1
          },
          {
            id: 4,
            imgUrl: "https://picsum.photos/200/300?random=4",
            item: "Product Four ",
            description: "Best in the world",
            price: 907,
            quantity : 1
          },
          {
            id: 5,
            imgUrl: "https://picsum.photos/200/300?random=5",
            item: " Product Five",
            description: " Best in the world ",
            price: 847,
            quantity : 15
          },
      
          {
            id: 6,
            imgUrl: "https://picsum.photos/200/300?random=1",
            item: " Product Six",
            description: "Best in the world",
            price: 799,
            quantity : 1
      
          },
          {
            id: 7,
            imgUrl: "https://picsum.photos/200/300?random=2",
            item: " Product Seven ",
            description: " Best in the world",
            price: 1499,
            quantity : 1
          },
          {
            id: 8,
            imgUrl: "https://picsum.photos/200/300?random=8",
            item: "Product Eight",
            description: " Best in the world ",
            price: 999,
            quantity : 1
          },
          {
            id: 9,
            imgUrl: "https://picsum.photos/200/300?random=9",
            item: " Product Nine ",
            description: "Best in the world",
            price: 499,
            quantity : 1
          },
          {
            id: 10,
            imgUrl: "https://picsum.photos/200/300?random=10",
            item: " Product Ten  ",
            description: " Best in the world",
            price: 399,
            quantity : 1
          }
    ])
    
    const [wishItems , setWishItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [search , setSearch] = useState("")
    const [searchResults , setSearchResults] = useState([])
    
    
    useEffect(() => {
      const filteredResults = products.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))
      setSearchResults(filteredResults)
    }, [products , search])
    
    
    const handleWishItems = (item) => {
      setWishItems([...wishItems , item ]) 
    }
    
    const handleCartItems = (item) => {
      setCartItems([...cartItems , item ]) 
    }
     
    
    const removeWishItems = (id) => {
      const removedItems = wishItems.filter((item) => item.id !== id );
      setWishItems(removedItems)
    
    }
    
    const removeCartItems = (id) => {
      const removedItems = cartItems.filter((item) => item.id !== id );
      setCartItems(removedItems)
    }
    
    
    const incrementQty = (id) => {
      const incrementValue = cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity + 1 } : item )
      setCartItems(incrementValue)
     }
     
     const decrementQty = (id) => {
         const decrementValue = cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity-1 } : item )
         setCartItems(decrementValue)
     }
    
    return (
     <DataContext.Provider value = {{
        wishItems, cartItems, search , setSearch  , handleWishItems , removeCartItems, incrementQty , decrementQty,
         handleCartItems, removeWishItems , searchResults
     }}>
        {children}
     </DataContext.Provider>
    )
}

export default DataContext
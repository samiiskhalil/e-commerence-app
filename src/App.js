import {useEffect,useState} from 'react'
import 'fontsource-roboto'
import {Products,Navbar} from './components'
import {commerce} from './lib/commerce.js'
const App = () => {
  
const [products,setProducts]=useState([])
const [cart, setCart] = useState({})
    const fetchProducts = async () => {
      const {data} = await commerce.products.list();
setProducts(data)
    }
    const fetchCart=async()=>{
    setCart(await commerce.cart.retrieve())
    }
useEffect(()=>{
  fetchProducts()
  fetchCart()
},[])  
const handleAddCart=async(cartId,quantity)=>{
  let item = await commerce.cart.add(cartId,quantity)
  setCart(item.cart)
}
return (
    <>
    <Navbar cartItems={cart.total_items} />
      <Products onAddCart={handleAddCart} products={products}  />
    </>
  )}


export default App

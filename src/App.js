import {useEffect,useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'fontsource-roboto'
import {Products,Navbar,Cart} from './components'
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
    console.log(cart)
useEffect(()=>{
  fetchProducts()
  fetchCart()
},[])  
const handleAddCart=async(cartId,quantity)=>{
  let item = await commerce.cart.add(cartId,quantity)
  setCart(item.cart)
}
const handleEmptyCart = async (cartId)=>{
  const {cart} =await commerce.cart.remove()
setCart(cart)
}

const handleUpdateCart=async (cardId,quantity)=>{
  const {cart}=await commerce.cart.update(cardId,{quantity})
  setCart(cart)
}

return (
    <><Router>

    <Navbar cartItems={cart.total_items} />
      <Switch>
        <Route exact path='/' >
      <Products onAddCart={handleAddCart} products={products}  />
        </Route  >
        <Route exact path='/cart' >
    <Cart cart={cart} 
    onAddCart={handleAddCart}
    onEmptyCart={handleEmptyCart}
    inre
    />  
        </Route>
    </Switch>
    </Router>
    </>
  )}


export default App

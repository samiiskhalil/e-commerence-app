import {useEffect,useState} from 'react'
import 'fontsource-roboto'
import {Products,Navbar} from './components'
import {commerce} from './lib/commerce.js'
const App = () => {
  
  const [products,setProducts]=useState([])
    const FetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
  }
  useEffect(()=>{
    FetchProducts()
  },[])
console.log(products) 
 return (
    <>
    <Navbar/>
      <Products/>
    </>
  )}


export default App

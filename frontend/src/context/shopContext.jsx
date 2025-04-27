import { createContext, useEffect, useState } from "react"
//import {products} from "../assets/assets"
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

const shopContextProvider= (props) =>{
    const currency = "₹"
    const delivery_cost = 15
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItem,setCartItem] = useState({})
    const [products, setProducts]  = useState([])
    const [token,setToken] = useState('')

    const navigate = useNavigate()

    const addToCart = async(itemId,size)=>{
        if(!size){
            toast.error("Select Product Size.")
            return;
        }

        let cartData = structuredClone(cartItem);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }
            
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)
        toast.success(`Product added to cart!`)

        if(token){
            try {
                await axios.post(backendURL+'/api/cart/add',{itemId,size},{headers:{token}})

            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }

    {/*-------GET CART COUNT---------- */}
    const getCartCount = () =>{
        let totalCount = 0
        for(const items in cartItem){
            for(const size in cartItem[items]){
                try{
                    if(cartItem[items][size]>0){
                        totalCount += cartItem[items][size];
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount;
    }
{/*---------UPDATE THE QUANTITY OF CART-----------  */}

    const updateQuantity = async (itemId,size,quantity)=>{
        let cartData = structuredClone(cartItem)
        cartData[itemId][size] = quantity
        setCartItem(cartData)
        if(token){
            try {
                await axios.post(backendURL+'/api/cart/update',{itemId,size,quantity},{headers:{token}})
                

            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }
{/*------------GET CART TOTAL AMOUNT--------------- */}

    const getCartAmount = () =>{
        let totalAmount = 0
        for(const items in cartItem){
            let itemInfo = products.find((product)=>product._id === items)
            for(const size in cartItem[items]){
                try {
                    if(cartItem[items][size] > 0){
                        totalAmount += itemInfo.price *cartItem[items][size]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () =>{
        try {
            const response = await axios.get(backendURL+'/api/product/list')
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    const getUserCart = async (token) =>{
        try {
            const response = await axios.post(backendURL+'/api/cart/get',{},{headers:{token}})
            if(response.data.success){
                setCartItem(response.data.cartData)
                
            }else{
                console.log("get user cart is not working");     
            }
            
            

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

useEffect(()=>{
    getProductsData()
},[])
    
useEffect(()=>{
    if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
        getUserCart(localStorage.getItem('token'))
    }
},[])

    const value = { 
            products,currency,delivery_cost,
            search,setSearch,showSearch,setShowSearch,
            cartItem,setCartItem,addToCart,getCartCount,updateQuantity,getCartAmount,
            navigate,backendURL,setToken,token
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default shopContextProvider;
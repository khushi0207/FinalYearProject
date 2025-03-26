import { createContext, use, useEffect, useState } from "react"
import {products} from "../assets/assets"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

const shopContextProvider= (props) =>{
    const currency = "₹"
    const delivery_cost = 15
    const [search, setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItem,setCartItem] = useState({})

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

    const value = { 
            products,currency,delivery_cost,
            search,setSearch,showSearch,setShowSearch,
            cartItem,addToCart,getCartCount,updateQuantity,getCartAmount,
            navigate
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default shopContextProvider;
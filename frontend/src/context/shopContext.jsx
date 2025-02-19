import { createContext } from "react"
import {products} from "../assets/assets"

export const shopContext = createContext();

const shopContextProvider= (props) =>{
    const currency = "₹"
    const delivery_cost = 15
    const value = { 
            products,currency,delivery_cost
    }
    return(
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    )
}

export default shopContextProvider;
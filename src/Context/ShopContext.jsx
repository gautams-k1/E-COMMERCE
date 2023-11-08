import { createContext, useState } from "react";
import allProduct from '../Componets/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    let i = 0
    for(i=0; i<allProduct.length ; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props)=>{
    
    const [cartItems, setcartItems] = useState(getDefaultCart())
    const ContextValue = {allProduct, cartItems};

    const addtoCart = (itemsId)=>{
        setcartItems((prev)=>({...prev,[itemsId]:prev[itemsId]+1}))
    }
    const removetoCart = (itemsId)=>{
        setcartItems((prev)=>({...prev,[itemsId]:prev[itemsId]-1}))
    }

    const getTotleCart = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            if(cartItems[items]>0){
                let itemsInfo = allProduct.find((product)=>product.id===Number(items))
                totalAmount += itemsInfo.new_price * cartItems[items]
            }
        }
        return totalAmount;
        
    }
    

    const getTotalCartitems = () =>{
        let totalItems = 0;
        for( const items in cartItems){
            if(cartItems[items]>0){
                totalItems+=cartItems[items];
            }
        }
        return totalItems;
    }

    return (
        <ShopContext.Provider value={{ ...ContextValue, getTotalCartitems, getTotleCart, addtoCart, removetoCart }}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
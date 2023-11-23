import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart  Counter
    const [count, setCount] = useState(0)

    // Product detail Open-Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product detail Show product
    const [productToShow, setProductToShow] = useState({})

    console.log('COUNT: ', count)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow           
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}
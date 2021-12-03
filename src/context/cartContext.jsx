import { useState, createContext, useContext, useEffect } from "react"

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        addedItems: [],
        totalPrice: 0
    })

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const addItem = (item) => {
        if (cart.addedItems.some((i) => i.item.id === item.item.id)) {

            const oldAddedItem = cart.addedItems.find(i => i.item.id === item.item.id)
            const index = cart.addedItems.map(i => i.item.id).indexOf(item.item.id)
            const newQuantity = item.quantity + oldAddedItem.quantity
            const newAddedItems = cart.addedItems
            newAddedItems[index].quantity = newQuantity
            setCart({ ...cart, addedItems: newAddedItems })

        } else {
            const newAddedItems = cart.addedItems
            newAddedItems.push(item)
            setCart({ ...cart, addedItems: newAddedItems })
        }

    }

    const clear = () => {
        setCart({
            addedItems: [],
            totalPrice: 0
        });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
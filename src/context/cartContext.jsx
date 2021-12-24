import { useState, createContext, useContext, useEffect } from "react"
    
export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        addedItems: [],
        totalPrice: 0
    })

    useEffect(() => {
        cart.totalPrice = 0
        cart.addedItems.length != 0 ?
            cart.addedItems.map(function (i) {
                cart.totalPrice = cart.totalPrice + (i.item.price * i.quantity)
            }) :
            null
    }, [cart])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const addItem = (item) => {
        if (cart.addedItems.some((i) => i.item.id === item.item.id)) {
            const newAddedItems = cart.addedItems
            newAddedItems.find(i => i.item.id === item.item.id).quantity = newAddedItems.find(i => i.item.id === item.item.id).quantity + item.quantity
            setCart({ ...cart, addedItems: newAddedItems })
            return
        }

        const newAddedItems = cart.addedItems
        newAddedItems.push(item)
        setCart({ ...cart, addedItems: newAddedItems })
    }

    const setQuantity = (id, quantity) => {
        const newAddedItems = cart.addedItems
        newAddedItems.find(i => i.item.id === id).quantity = quantity
        setCart({ ...cart, addedItems: newAddedItems })
    }

    const deleteItem = (id) => {
        const newAddedItems = cart.addedItems
        newAddedItems.splice(newAddedItems.findIndex(i => i.item.id === id), 1)
        setCart({ ...cart, addedItems: newAddedItems })
    }

    const clear = () => {
        setCart({
            addedItems: [],
            totalPrice: 0
        });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, setQuantity, deleteItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
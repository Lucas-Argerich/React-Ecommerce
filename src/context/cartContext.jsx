import { useState, createContext, useContext, useEffect } from "react"

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        addedItems: [
            {
                item: {
                    "id": 18,
                    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
                    "price": 9.85,
                    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                    "category": "women's clothing",
                    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                    "rating": {
                        "rate": 4.7,
                        "count": 130
                    }
                },
                quantity: 1
            }
        ],
        totalPrice: 0
    })

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

    const clear = () => {
        setCart({
            addedItems: [],
            totalPrice: 0
        });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, setQuantity, clear }}>
            {children}
        </CartContext.Provider>
    )
}
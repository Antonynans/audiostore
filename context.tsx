import { ICartItem } from './models/cart'
import { createContext, useContext, useEffect, useState } from 'react'
import { products } from './data'
import { useLocalStorage } from 'usehooks-ts'

interface IProps {
  children: React.ReactNode
}

const CartContext = createContext<any>(null)

export const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<ICartItem[] | null>('cart', null)

  const clearCart = () => {
    setCart([])
  }

  const updateCart = (id: number, isDecrease?: boolean) => {
    const isExist = cart?.find((item: ICartItem) => item.id === id)
    if (!isExist) {
      return false
    }

    if (isExist.quantity === 1 && isDecrease) {
      return cart?.filter(obj => {
        return obj.id !== id
      })
    }

    return cart?.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          quantity: isDecrease ? isExist.quantity - 1 : isExist.quantity + 1,
        }
      }
      return obj
    })
  }

  const decrease = (id: number) => {
    const newCart = updateCart(id, true)
    if (newCart) {
      setCart(newCart)
    }
  }

  const increase = (id: number) => {
    const newCart = updateCart(id)
    if (newCart) {
      setCart(newCart)
    } else {
      const product = { quantity: 1, id: id }
      setCart(prev => (prev ? [...prev, product] : [product]))
    }
  }

  const removeAllItems = (id: number) => {
    const newCartItems = cart?.filter((item) => item.id !== id);
    setCart(newCartItems);
  }

  useEffect(() => {
    cart?.forEach(item => {
      const { id, quantity } = item
      if (quantity > 3 || quantity < 0 || id > products.length || id <= 0) {
        setCart([])
      }
    })
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, increase, decrease, clearCart, removeAllItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

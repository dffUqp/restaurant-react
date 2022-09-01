import { createContext, ReactNode, useContext, useState } from 'react';
import CartModal from '../components/CartModal';
import { ICartItem } from '../ts/dataType';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type TShoppingCartActions = {
  getItemQuntity: (id: number) => number;
  increaseCartQuntity: (id: number) => void;
  decreaseCartQuntity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

type TShoppingCartContext = {
  cartItems: ICartItem[];
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export let actions: TShoppingCartActions | null = null;

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  actions = {
    getItemQuntity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    },

    increaseCartQuntity(id: number) {
      setCartItems((currItems) => {
        if (cartItems.find((item) => item.id === id) == null) {
          return [...currItems, { id: id, quantity: 1 }];
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                quantity:
                  item.quantity !== 10 ? item.quantity + 1 : item.quantity,
              };
            } else {
              return item;
            }
          });
        }
      });
    },

    decreaseCartQuntity(id: number) {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    removeFromCart(id: number) {
      setCartItems((currItems) => {
        return currItems.filter((item) => item.id !== id);
      });
    },

    openCart() {
      setIsOpen(true);
    },
    closeCart() {
      setIsOpen(false);
    },
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
      }}
    >
      {children}
      <CartModal isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

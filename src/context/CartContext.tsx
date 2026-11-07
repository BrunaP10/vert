"use client";

import {
  createContext,
  useReducer,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

import type { Product } from "@/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }
  | { type: "LOAD_CART"; payload: CartItem[] };

function cartReducer(
  state: CartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "LOAD_CART":
      return {
        ...state,
        items: action.payload,
      };

    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { product: action.payload, quantity: 1 },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.product.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Recupera o carrinho salvo no navegador
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("vert-cart");

      if (savedCart) {
        const parsedCart: unknown = JSON.parse(savedCart);

        if (
          typeof parsedCart === "object" &&
          parsedCart !== null &&
          "items" in parsedCart &&
          Array.isArray(parsedCart.items)
        ) {
          dispatch({
            type: "LOAD_CART",
            payload: parsedCart.items as CartItem[],
          });
        }
      }
    } catch (error) {
      console.error("Erro ao recuperar o carrinho:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem("vert-cart", JSON.stringify(state));
    } catch (error) {
      console.error("Erro ao salvar o carrinho:", error);
    }
  }, [state, isLoaded]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

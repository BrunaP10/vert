"use client";

import {
  createContext,
  useReducer,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

import type { Product, ProductVariant } from "@/types/product";

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        product: Product;
        selectedVariant: ProductVariant;
      };
    }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string }
  | { type: "LOAD_CART"; payload: CartItem[] }
  | { type: "CLEAR_CART" };

function getCartItemId(
  product: Product,
  selectedVariant: ProductVariant
) {
  return `${product.id}-${selectedVariant.color}`;
}

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
      const { product, selectedVariant } = action.payload;

      const itemId = getCartItemId(product, selectedVariant);

      const existingItem = state.items.find(
        (item) =>
          getCartItemId(item.product, item.selectedVariant) === itemId
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            getCartItemId(item.product, item.selectedVariant) === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            selectedVariant,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            getCartItemId(item.product, item.selectedVariant) !==
            action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          getCartItemId(item.product, item.selectedVariant) ===
          action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            getCartItemId(item.product, item.selectedVariant) ===
            action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
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
          const restoredItems = parsedCart.items
            .map((item: CartItem & { selectedVariant?: ProductVariant }) => ({
              ...item,
              selectedVariant:
                item.selectedVariant ?? item.product?.variants?.[0],
            }))
            .filter(
              (item: CartItem) =>
                item.product &&
                item.selectedVariant &&
                item.quantity > 0
            );

          dispatch({
            type: "LOAD_CART",
            payload: restoredItems,
          });
        }
      }
    } catch (error) {
      console.error("Erro ao recuperar o carrinho:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Salva o carrinho no navegador
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

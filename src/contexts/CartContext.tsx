import { createContext, useContext, FC, ReactNode, useReducer, Dispatch } from 'react';

interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ICartState {
  items: ICartItem[];
}

enum ACTION_TYPES {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
}

type CartAction =
  | {
      type: ACTION_TYPES.ADD_ITEM;
      item: ICartItem;
    }
  | {
      type: ACTION_TYPES.REMOVE_ITEM;
      id: string;
    }
  | { type: ACTION_TYPES.CLEAR_CART };

const initialState: ICartState = { items: [] };

const cartReducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM: {
      const existingItemsIndex = state.items.findIndex((item) => item.id === action.item.id);
      if (existingItemsIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemsIndex].quantity += action.item.quantity;
        return { items: updatedItems };
      }
      return { items: [...state.items, action.item] };
    }

    case ACTION_TYPES.REMOVE_ITEM: {
      return { items: state.items.filter((item: ICartItem) => item.id !== action.id) };
    }

    case ACTION_TYPES.CLEAR_CART: {
      return { items: [] };
    }
    default:
      return state;
  }
};

interface ICartContextType {
  state: ICartState;
  dispatch: Dispatch<CartAction>;
}

const CartContext = createContext<ICartContextType>({
  state: initialState,
  dispatch: () => null,
});

export const useCart: () => ICartContextType = (): ICartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider: FC<ICartContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value: ICartContextType = {
    state: state,
    dispatch: dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

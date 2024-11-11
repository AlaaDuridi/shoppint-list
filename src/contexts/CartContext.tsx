import { createContext, useContext, FC, ReactNode, useReducer, Dispatch } from 'react';
import { ACTION_TYPES, ICartItem } from '../types/models/cart.model.ts';

interface ICartState {
  items: ICartItem[];
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

const INITIAL_STATE: ICartState = { items: [] };

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
  state: INITIAL_STATE,
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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const value: ICartContextType = {
    state: state,
    dispatch: dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

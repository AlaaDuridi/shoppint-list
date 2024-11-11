import { createContext, Dispatch, FC, ReactNode, useContext, useReducer } from 'react';
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
  | { type: ACTION_TYPES.CLEAR_CART }
  | {
      type: ACTION_TYPES.INCREASE_QUANTITY;
      id: string;
    }
  | {
      type: ACTION_TYPES.DECREASE_QUANTITY;
      id: string;
    };

const INITIAL_STATE: ICartState = { items: [] };

const cartReducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM: {
      const existingItem = state.items.find((item) => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.item, quantity: 1 }] };
    }

    case ACTION_TYPES.REMOVE_ITEM: {
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    }
    case ACTION_TYPES.CLEAR_CART: {
      return { items: [] };
    }
    case ACTION_TYPES.INCREASE_QUANTITY: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    }
    case ACTION_TYPES.DECREASE_QUANTITY: {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item,
          )
          .filter((item) => item.quantity),
      };
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

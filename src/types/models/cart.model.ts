import { IProduct } from './products.model.ts';

export interface ICartItem extends IProduct {
  quantity: number;
}

export enum ACTION_TYPES {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

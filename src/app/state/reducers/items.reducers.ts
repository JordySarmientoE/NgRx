import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ItemModel } from '../../core/models/Item.interface';
import { loadedItems, loadItems, addItem } from '../actions/items.actions';
import { ItemState } from '../state/item.state';

//TODO: Estado Inicial
export const initialState: ItemState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {...state, loading: true}
  }),
  on(loadedItems, (state, {items}) => {
    return {...state, loading: false, items};
  }),
  on(addItem, (state, {item}) => {
    return {...state,
      items: [item, ...state.items]
    };
  }),
  // on(loadItems, (state) => {
  //   return state;
  // })
);

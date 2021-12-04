import { ActionReducerMap } from '@ngrx/store';
import { ItemState } from './state/item.state';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  items: ItemState;
//   collection: ReadonlyArray<string>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items : itemsReducer
}
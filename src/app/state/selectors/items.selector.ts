import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemState } from '../state/item.state';
 
export const selectItemFeature = (state: AppState) => state.items;

export const selectLoading = createSelector(
    selectItemFeature,
  (state: ItemState) => state.loading
);

 
export const selectListItem = createSelector(
    selectItemFeature,
  (state: ItemState) => state.items
);
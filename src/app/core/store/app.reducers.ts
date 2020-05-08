
import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    book: reducers.BookState;
}

export const appReducers: ActionReducerMap<AppState> = {
    book: reducers.BookSReducer
};


import * as fromBook from '../actions/book.actions';
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { OptionType } from 'src/app/core/enums/enums';
import { Book } from 'src/app/core/models/book.model';


export interface BookState {
    books: Book[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: BookState = {
    books: [],
    loaded: false,
    loading: false,
    error: null
};
const BookSReducer = createReducer(
    initState,
    on(fromBook.LoadBook, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(fromBook.LoadBookError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        error
    })),
    on(fromBook.LoadBookSuccessful, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: true,
        books: payload
    })),
);

export function reducer(
    state: BookState | undefined,
    action: Action
): BookState {
    return BookSReducer(state, action);
}

export const selectBook = createFeatureSelector<BookState>(
   OptionType.Book
);

export const selectLoadBooks = createSelector(
    selectBook,
    (state: BookState) => state.books
);

export const selectLoadingBook = createSelector(
    selectBook,
    (state: BookState) => state.loading
);

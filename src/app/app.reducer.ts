import * as fromBook from '../app/home/reducers/book.reducer';
import { InjectionToken } from '@angular/core';

import { Action, ActionReducerMap } from '@ngrx/store';
export interface State {
    book: fromBook.BookState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers', {
    factory: () => ({
        book: fromBook.reducer,
    }),
});


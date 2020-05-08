import { BookService } from '../../service/book.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as bookActions from '../actions/index';
import {  map, catchError, switchMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

@Injectable()
export class BookEffects {
    constructor(public actions$: Actions,
                public bookService: BookService) { }

    @Effect()
    loadBooks$: Observable<Action> = this.actions$
    .pipe(ofType(bookActions.LOAD_BOOK),
        switchMap(() => this.bookService.getBooks().pipe(
            map((books: Book[]) => new bookActions.LoadBookSuccessful(books)),
            catchError(error => of(new bookActions.LoadBookError(error)))
           )
        )
    );
}
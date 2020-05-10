import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { BookActions } from '../actions/index';
import { GeneralService } from '../../core/api/general.service';
import { Book } from 'src/app/core/models/book.model';
@Injectable()
export class BookEffects {
    constructor(public actions$: Actions,
                public generalService: GeneralService) { }
    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BookActions.LoadBook),
            switchMap(() => this.generalService.getBooks().pipe(
                map((payload: Book[]) => {
                    return BookActions.LoadBookSuccessful({
                        payload,
                    })
                }),
                catchError(error => of(BookActions.LoadBookError({error})))
            ))
        )
    );
    // @Effect()
    // loadBooks$: Observable<Action> = this.actions$
    // .pipe(ofType(bookActions.LOAD_BOOK),
    //     switchMap(() => this.bookService.getBooks().pipe(
    //         map((books: Book[]) => new bookActions.LoadBookSuccessful(books)),
    //         catchError(error => of(new bookActions.LoadBookError(error)))
    //        )
    //     )
    // );
}
import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';


export const LOAD_BOOK = '[BOOK] load book';
export const LOAD_BOOK_SUCCESSFUL = '[BOOK] loader successful';
export const LOAD_BOOK_ERROR = '[BOOK] laoder book error';

export class LoadBook implements Action {
    readonly type = LOAD_BOOK;
}
export class LoadBookSuccessful implements Action {
    readonly type = LOAD_BOOK_SUCCESSFUL;
    constructor(public payload: Book[]) { }
}
export class LoadBookError implements Action {
    readonly type = LOAD_BOOK_ERROR;
    constructor(public error: any) { }
}

export type bookActions = LoadBook | LoadBookSuccessful | LoadBookError;

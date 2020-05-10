import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/core/models/book.model';

export const LoadBook = createAction(
    '[BOOK] load book',
);

export const LoadBookSuccessful = createAction(
    '[BOOK] loader successful',
    props<{payload: Book[]}>()
);

export const LoadBookError = createAction(
    '[BOOK] laoder book error',
   props<{error: any}>()
);


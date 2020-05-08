
import * as fromBook from '../actions/book.actions';
import { Book } from '../../models/book.model';


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
export function BookSReducer(
    state = initState,
    action: fromBook.bookActions
): BookState {
    switch (action.type) {
        case fromBook.LOAD_BOOK:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromBook.LOAD_BOOK_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                loaded: true,
                books: [...action.payload]
            };
        case fromBook.LOAD_BOOK_ERROR:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.error.status,
                    ulr: action.error.url,
                    message: action.error.message
                }
            };
        default: return state;
    }
}
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import * as fromBookReducer from '../store/reducers/index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookActions } from '../store/actions';
@Injectable()
export class BookService {
  book: Book;
  constructor(private store: Store<fromBookReducer.BookState>){}

  getBook(): Observable<Book[]>{
    return this.store.pipe(select(fromBookReducer.selectLoadBooks));
  }
  dispatchBook(){
    this.store.dispatch(BookActions.LoadBook());
  }

}

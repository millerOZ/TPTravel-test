import { Injectable } from '@angular/core';
import * as fromBookReducer from '../reducers/book.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookActions } from '../actions/index';
import { Book } from 'src/app/core/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(public store: Store<fromBookReducer.BookState>){}

  getBook(): Observable<Book[]>{
    return this.store.pipe(select(fromBookReducer.selectLoadBooks));
  }
  dispatchBook(){
    this.store.dispatch(BookActions.LoadBook());
  }
   
}

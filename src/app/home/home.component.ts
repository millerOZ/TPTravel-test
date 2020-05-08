import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducers';
import * as actions from 'src/app/core/store/actions/index';
import { Book } from '../core/models/book.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listOfData: Book[] = [];
  public loading: boolean;

  constructor(
    public store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new actions.LoadBook());

    this.store.select('book').subscribe(bookStore => {
      this.listOfData = bookStore.books;
      this.loading = bookStore.loading;
    })
  }

}

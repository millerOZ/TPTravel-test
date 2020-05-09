import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducers';
import * as actions from 'src/app/core/store/actions/index';
import { Book } from '../core/models/book.model';
import { BookService } from '../core/service/book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //public listOfData: Book[] = [];
  public loading: boolean;
  public LoadBooks$: Observable<Book[]>;
  constructor(
    private service: BookService,
  ) { }

  ngOnInit(): void {
    this.LoadBooks$ = this.service.getBook();
  }
  dispatchLoadBook() {
    this.service.dispatchBook();
  }

}

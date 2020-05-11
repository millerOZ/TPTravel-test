import { Component, OnInit } from '@angular/core';
import { Book } from '../core/models/book.model';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listOfData: Book[] = [];
  public loading: boolean;
  public LoadBooks$: Observable<Book[]>;

  constructor(
    public service: BookService
  ) { }

  ngOnInit(): void {
    this.service.dispatchBook();
    this.LoadBooks$ = this.service.getBook();
  }
  // dispatchLoadBook() {
  //  this.service.dispatchBook();
  // }

}

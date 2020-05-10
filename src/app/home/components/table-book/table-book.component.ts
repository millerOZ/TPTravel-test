import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})
export class TableBookComponent implements OnInit {
  @Input() list: Book[];
  //@Output() dispatchBook = new EventEmitter<Book>();
  constructor() { }
  public listOfData: Book[] = [];
  public loading: boolean;
  ngOnInit(): void {
    console.log(this.list)
  }

}

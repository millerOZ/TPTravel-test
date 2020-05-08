import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public getBooks(){
    return this.http.get<Book[]>('https://jsonplaceholder.typicode.com/posts');
  }
}


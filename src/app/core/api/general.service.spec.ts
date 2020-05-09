import { TestBed, getTestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';
import { Book } from '../models/book.model';

describe('BookService', () => {
  let service: BookService;
  let injector: TestBed;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    injector = getTestBed();
    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call loadBook', () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const mockBook: Book[] = [
      {
        userId: '001',
        id: '1',
        title: 'title 1',
        body: 'text..'
      }
    ];
    service.getBooks().subscribe((res: Book[]) => {
      expect(res).toEqual(mockBook);
    });
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBook);
  });

});

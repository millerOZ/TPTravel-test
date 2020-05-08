import {
    LoadBook,
    LoadBookSuccessful,
    LoadBookError
} from './book.actions';
import { Book } from '../../models/book.model';

const bookDummy: Book[] = [];

describe('book actions', () => {
  let loadBook: LoadBook = null;
  let loadBookSuccessful: LoadBookSuccessful = null;
  let loadBookError: LoadBookError = null;

  beforeEach(() => {
    loadBook = new LoadBook();
    loadBookSuccessful = new LoadBookSuccessful(bookDummy);
    loadBookError = new LoadBookError('Error 400');
  });

  it('should LoadBook', () => {
      const LOAD_BOOK = '[BOOK] load book';
      expect(loadBook.type).toEqual(LOAD_BOOK);
  });

  it('should LoadBookSuccessful', () => {
      const LOAD_BOOK_SUCCESSFUL = '[BOOK] loader successful';
      expect(loadBookSuccessful.type).toEqual(LOAD_BOOK_SUCCESSFUL);
      expect(loadBookSuccessful.payload).toEqual(bookDummy);
  });

  it('should LoadBookError', () => {
      const LOAD_BOOK_ERROR = '[BOOK] laoder book error';
      expect(loadBookError.type).toEqual(LOAD_BOOK_ERROR);
      expect(loadBookError.error).toEqual('Error 400');
  });

  afterEach(() => {
    loadBook = null;
    loadBookSuccessful = null;
    loadBookError = null;
  });
});

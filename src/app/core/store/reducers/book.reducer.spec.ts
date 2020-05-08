import { LoadBookSuccessful } from '../actions/book.actions';
import { BookSReducer} from './book.reducer';
describe('book reducer', () => {

    it('should load book', () => {
        const newState = BookSReducer(
            undefined,
            new LoadBookSuccessful([{
                userId: '01',
                id: '0001',
                title: 'title',
                body: 'dignissimos aperiam dolorem qui eum'
            }])
        );

        expect(newState.books[0].userId).toEqual('01');
        expect(newState.books[0].id).toEqual('0001');
        expect(newState.books[0].title).toEqual('title');
        expect(newState.books[0].body).toEqual('dignissimos aperiam dolorem qui eum');
    });


});
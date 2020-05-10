import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { BookService } from '../../service/book.service';
xdescribe('bookEffects', () => {
    let actions$;

    beforeEach(() => {
        actions$ = new ReplaySubject(1);

        TestBed.configureTestingModule({
            providers: [
                provideMockActions(() => actions$),
                {
                    provide: BookService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        });
    });

    it('should request', async done => {
        TestBed.overrideProvider(BookService, {

        })
    })
})
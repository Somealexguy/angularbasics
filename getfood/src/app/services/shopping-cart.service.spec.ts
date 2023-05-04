import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from '../interfaces/transaction';
//https://angular.io/guide/testing-services#httpclienttestingmodule


describe('ShoppingCartService', () => {
    let service: ShoppingCartService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ShoppingCartService] });
        service = TestBed.inject(ShoppingCartService);
    });

    it('it should be zero',
        (done: DoneFn) => {
            service.activeItems$.subscribe(result => {
                expect(result.length).toEqual(0)
                done();
            });
        });

    it('it should be one', (done: DoneFn) => {
        const item: ShoppingCartItem = { name: 'socks', cost: 100, amount: 1, id: 1 };

        service.add(item);
        service.activeItems$.subscribe(result => {
            expect(result.length).toEqual(1);
            expect(result[0].name).toEqual('socks');
            expect(result[0].cost).toEqual(100);
            done();

        });

    });
    it('it should added and removed', (done: DoneFn) => {
        const item: ShoppingCartItem = { name: 'socks', cost: 100, amount: 1, id: 1 };

        service.add(item);
        service.removeItem(1);
        service.activeItems$.subscribe(result => {
            expect(result.length).toEqual(0);
            done();
        });

    });

});

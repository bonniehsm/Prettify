import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cartSubtotal'})

export class CartSubtotalPipe implements PipeTransform {
    transform(price: number, quantity: number): number {
        return price * quantity;
    }
}
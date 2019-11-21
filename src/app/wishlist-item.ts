import { MarkedItem } from './marked-item';

class WishlistItem implements MarkedItem {
    id: number;
    option: string;
    price: number;
    constructor(
        id: number,
        option: string,
        price: number,
    ){}
    addProduct(item: MarkedItem) {

    }
    removeProduct(item: MarkedItem) {

    }
    toggleWishlist(){

    }
}
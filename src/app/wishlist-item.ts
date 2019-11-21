import { MarkedItem } from './marked-item';

class WishlistItem implements MarkedItem {
    id: number;
    option: string;
    constructor(
        id: number,
        option: string,
    ){}
    addProduct(item: MarkedItem) {

    }
    removeProduct(item: MarkedItem) {

    }
    toggleWishlist(){

    }
}
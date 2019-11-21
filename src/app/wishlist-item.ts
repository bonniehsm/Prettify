import { MarkedItem } from './marked-item';

export class WishlistItem implements MarkedItem {
    id: number;
    name: string;
    option: string;
    price: number;
    image?: string;

    constructor(
        id: number,
        name: string,
        option: string,
        price: number,
        image?: string,
    ){
        this.id = id;
        this.name = name;
        this.option = option;
        this.price = price;
        if(image !== null){
            this.image = image;
        }
    }

}
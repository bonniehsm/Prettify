export interface MarkedItem {
    id: number;
    option: string;
    price: number;
    addProduct(item: MarkedItem): void;
    removeProduct(item: MarkedItem): void;
}
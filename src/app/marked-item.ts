export interface MarkedItem {
    id: number;
    option: string;
    addProduct(item: MarkedItem): void;
    removeProduct(item: MarkedItem): void;
}
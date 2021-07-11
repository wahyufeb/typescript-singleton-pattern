export interface OrderInterface {
    id: number;
    name: string;
    products: string[];
}

export interface DetailOrderInterface extends OrderInterface {
    details: string[]
}
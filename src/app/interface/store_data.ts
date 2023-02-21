export interface IStore{
    "id": number;
    "name": string;
    "price": number;
    "url": string;
    "description": string;
}

export interface ICart{
    "id": number;
    "name": string;
    "price": number;
    "url": string;
    "description": string;
    "quantity":string
}

export interface ICheckout{
    "firstName": string;
    "totalPrice": number;
}
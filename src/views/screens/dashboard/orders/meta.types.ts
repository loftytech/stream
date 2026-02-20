export interface Order {
    assignee?:   null;
    balance?:    Balance;
    clientName?: string;
    date?:       Date;
    id?:         string;
    price?:      Balance;
    product?:    Product;
    quantity?:   number;
    rate?:       Balance;
    slug?:       string;
    status?:     string;
}

export interface Balance {
    currency?: string;
    value?:    number;
}

export interface Product {
    description?: null;
    id?:          string;
    image?:       Image;
    name?:        string;
    slug?:        null;
    unit?:        Unit;
}

export interface Image {
    id?:  string;
    url?: string;
}

export interface Unit {
    full?:  string;
    short?: string;
}

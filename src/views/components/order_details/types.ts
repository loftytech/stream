export interface PurcchaseDetails {
    balance?:        number;
    currency?:       string;
    files?:          File[];
    id?:             string;
    loadingDate?:    null;
    logistics?:      Logistic[];
    marketer?:       string;
    orderDate?:      Date;
    payments?:       Payment[];
    price?:          number;
    purchaseNumber?: string;
    quantity?:       number;
    quantityLeft?:   number;
    rate?:           number;
    status?:         string;
    unit?:           Unit;
}

export interface File {
    description?: string;
    url?:         string;
}

export interface Logistic {
    driverName?:   string;
    id?:           string;
    loadingDate?:  Date;
    plantAddress?: string;
    plantName?:    string;
    quantity?:     number;
    quantityLeft?: number;
    truckNumber?:  string;
}

export interface Payment {
    accountName?:   string;
    accountNumber?: string;
    amount?:        Amount;
    balance?:       Amount;
    bank?:          string;
    id?:            string;
}

export interface Amount {
    currency?: string;
    value?:    number;
}

export interface Unit {
    fullPlural?:    string;
    fullSingular?:  string;
    id?:            string;
    shortPlural?:   string;
    shortSingular?: string;
}

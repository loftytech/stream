export interface Terminal {
    id?:      string;
    name?:    string;
    address?: string;
    status?:  string;
}

export interface Product {
    id?:          string;
    slug?:        string;
    name?:        string;
    description?: null;
    avgRate?:     AvgRate;
    unit?:        Unit;
    image?:       Image;
}

export interface AvgRate {
    value?:    string;
    currency?: string;
}

export interface Image {
    id?:  string;
    url?: string;
}

export interface Unit {
    fullSingular?:  string;
    fullPlural?:    string;
    shortSingular?: string;
    shortPlural?:   string;
}

export interface UnitQuantity {
    id?:               string;
    name?:             string;
    shortName?:        string;
    plural?:           string;
    shortPlural?:      string;
    category?:         string;
    conversionFactor?: string;
    status?:           string;
}

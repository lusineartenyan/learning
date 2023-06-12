export interface Car {
    yearModel: number;
    brand: string;
    price: number;
    color: string;
    modelType?: string;
};

export interface User {
    name: string;
    lastName: string;
    age: number;
    contact?: number;
    hasProp: boolean;
    roles?: ('Author' | 'Editor')
}


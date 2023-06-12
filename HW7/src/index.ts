import { User, Car } from "./interface";

/* Pick */
type UserFullName = Pick<User, "name" | "lastName">;
const person: UserFullName = {
    name: "test",
    lastName: "test1",
};

/* Omit<Type, Keys> */
type UserShortInfo = Omit<User, "roles" | "hasProp" >
const UserShortInfo: UserShortInfo = {
    name: "test",
    lastName: 'test',
    age: 12,
    contact: 222,
    /* roles and hasProp is not assignable to type 'UserShortInfo'.*/
}

/* Partial */
function updateCar(car: Car, fieldsToUpdate: Partial<Car>) {
    return { ...car, ...fieldsToUpdate };
}

const car1 = {
    brand: "test",
    color: "gray",
    yearModel: 2009,
    price: 2231
};
   
const car2 = updateCar(car1, {
    color: "white",
});

console.log(`testing Partial ${JSON.stringify(car2, null, 5)}`);


/* Required */
type UserRequired = Required<User>;
const userReq: UserRequired = {
    name: 'string',
    lastName: 'string',
    age: 23,
    contact: 234,
    hasProp: true,
    roles: 'Author',
};
/* Optional Values also become a required */

/* Record */
/* Change array to objects */
const data = [
    {
        name: "test",
        lastName: 'lastName',
        age: 30,
    },
    {
        name: "test1",
        lastName: 'lastName1',
        age: 78,
    },
    {
        name: "test2",
        lastName: 'lastName2',
        age: 4,
    }
]

const res = data.reduce(function(agg: Record<string, {
        name: string; 
        lastName:string; 
        age: number
    }>, val, i) {
    agg[String(i)] = {
        ...val
    }
    return agg;
}, {});

console.log(`testing Record ${JSON.stringify({res}, null, 5)}`);
res['1'].age /* name, lastName */


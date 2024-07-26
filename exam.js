// Input
const fruits = [
    {
        name: "apple",
        quantity: 10,
    },
    {
        name: "banana",
        quantity: 8,
    },
    {
        name: "grapes",
        quantity: 12,
    },
    {
        name: "apple",
        quantity: 5,
    },
    {
        name: "grapes",
        quantity: 2,
    },
];


// Output
const quantity = {
    // apple: 15,
    // banana: 8,
    // grapes: 14,
};

const calculateQantity = (array) => {
    const quantity = {};

    for (let i = 0; i < array.length; i++) {
        let fruit = array[i].name;
        console.log(fruit);
        if (quantity[fruit]) {
            quantity[fruit] = quantity[fruit] + array[i].quantity;
        }
        else {
            quantity[fruit] = array[i].quantity;
        }
    }

    return quantity;
};
console.log(calculateQantity(fruits));
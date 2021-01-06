import { observable } from "mobx";

const storeBasket = observable({
    price: 155,
    quantity: 0,
    total: 0
});

export default storeBasket;

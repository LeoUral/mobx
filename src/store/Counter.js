import { makeAutoObservable } from "mobx";

class Counter {


    count = 0;
    firstName = '';
    lastName = '';
    name = '';


    constructor() {
        makeAutoObservable(this); // автоматическое наблюдение
    }

    increment() {
        this.count = this.count + 1;
        console.log(this.count);
    }

    decrement() {
        this.count = this.count - 1;
        console.log(this.count);
    }

    fullName() {
        this.name = this.firstName + ' ' + this.lastName;
    }
}
export default new Counter();
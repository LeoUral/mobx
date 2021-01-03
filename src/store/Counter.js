import { makeAutoObservable } from "mobx";


class Counter {

    count = 0;

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

}
export default new Counter();
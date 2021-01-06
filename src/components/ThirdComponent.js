import { action, autorun, computed, reaction } from 'mobx';
import React from 'react';
import storeBasket from '../store/Basket';
import { observer } from 'mobx-react';


@observer class ThirdComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);

        autorun(() => {
            if (storeBasket.total > 1000) {
                this.colorRed = 'green';
            } else {
                this.colorRed = 'red';
            }
        })

        reaction(
            () => this.operationBuy,
            (result) => {
                this.lookBuy = result;
                // this.colorRed = 'red';
                this.colorBlue = 'blue';
            }
        )
    }

    @action handleIncrement() {
        storeBasket.quantity = storeBasket.quantity + 1;
    }

    @action handleDecrement() {
        storeBasket.quantity = storeBasket.quantity - 1;
    }

    @computed get operationBuy() {
        return storeBasket.total = storeBasket.quantity * storeBasket.price;
    }

    render() {
        return (
            <>
                <div>
                    <div style={{ backgroundColor: ` ${this.colorRed} ` }}>Значение PRICE: {storeBasket.total}</div>
                    <div style={{ color: `${this.colorBlue}` }}>Значение BUY: {this.lookBuy} </div>
                    <button onClick={this.handleIncrement}>+1</button>
                    <button onClick={this.handleDecrement}>-1</button>
                </div>
            </>

        );
    }
}
export default ThirdComponent;
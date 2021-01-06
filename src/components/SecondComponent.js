import { observer } from 'mobx-react';
import React from 'react';
import storeBasket from '../store/Basket';
import Counter from '../store/Counter';

@observer class SecondComponent extends React.Component {

    handleFirstName(event) {
        Counter.firstName = event.target.value;
        Counter.fullName();
    }

    handleLastName(event) {
        Counter.lastName = event.target.value;
        Counter.fullName();
    }

    handleChangePrice(e) {
        storeBasket.price = e.target.value;
    }

    render() {


        return (
            <>
                <input type="text" onChange={this.handleFirstName} />
                <input type="text" onChange={this.handleLastName} />
                <div></div>
                <h4>
                    {Counter.name}
                </h4>
                <div></div>
                <input type="text" onChange={this.handleChangePrice} />
            </>
        );
    }
}

export default SecondComponent;
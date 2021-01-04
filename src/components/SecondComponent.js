import { observer } from 'mobx-react';
import React from 'react';
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

    render() {


        return (
            <>
                <input type="text" onChange={this.handleFirstName} />
                <input type="text" onChange={this.handleLastName} />
                <div></div>
                <h4>
                    {Counter.name}
                </h4>
            </>
        );
    }
}

export default SecondComponent;
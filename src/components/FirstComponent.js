import React from 'react';
// import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Counter from '../store/Counter';



@observer class FirstComponent extends React.Component {


    render() {
        return (
            <>
                <div>

                    <h1> {Counter.count} </h1>

                    <button onClick={() => Counter.decrement()}> -1 </button>
                    <button onClick={() => Counter.increment()}> +1 </button>
                </div>
            </>
        );
    }
}

export default FirstComponent;
import React, {Component} from 'react';
import {store} from './store.js';
import connect from '../../annx/reactstore';

@connect(store)
class Index extends Component {

    changeDate = type => {
        store.dispatch({
            type,
            payload: 1,
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.changeDate('add')}>+</button>
                    {this.props.id}
                    <button onClick={() => this.changeDate('minute')}>-</button>
                </div>
            </>
        )
    }
}


export default Index;

import React, {Component} from 'react';
import {store} from './store';
import connect from "@lijianqiang01/annx/dist/dist/annx-react";

@connect(store)
class Index extends Component {

    componentDidMount() {
    }

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

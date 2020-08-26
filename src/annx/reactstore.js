import React, { Component } from 'react';



export default function connect (store, WrappedComponent) {
    return class Connect extends Component {
        constructor(props) {
            super(props);
            this.state = store.getState();
        }

        subscribe = _ => {
            this.setState(store.getState())
        }

        componentDidMount() {
            store.subscribe(this.subscribe);
        }

        componentWillUnmount() {
            store.unsubscribe(this.subscribe);
        }

        render() {
            console.log(222,this.state)
            return (
                <>
                    <WrappedComponent {...this.state} />
                </>
            );
        }

    }
}

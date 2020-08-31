import React, { Component } from 'react';



export default function connect (store) {
    return (WrappedComponent) => {
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
                return (
                    <>
                        <WrappedComponent {...this.state} {...this.props} />
                    </>
                );
            }

        }
    }
}

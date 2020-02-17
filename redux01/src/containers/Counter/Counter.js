import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }


    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState(({ counter }) => ({ counter: counter + 1 }))
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            case 'test':
                this.setState((prevState) => { return { a: 1, b: 2 } }, () => {
                    console.log(this.state)
                })
                break;
        }
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" prt={console.log(this.props)} clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter} />
                <CounterControl label="TEST" clicked={() => this.counterChangedHandler('test')} />
                <hr />
                <button onClick={this.props.onStoreResult}>Show Counter</button>

                <ul>
                    {this.props.storeResults.map((strRes) => {
                        return <li key={strRes.id} onClick={() => this.props.onDeleteResult(strRes.id)}>{strRes.val}</li>
                    })}

                </ul>

            </div>

        )

    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
        onSubstractCounter: () => dispatch({ type: 'SUBSTRACT', val: 15 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultEl: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


/*

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.state.counter} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

export default Counter;

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    state,
    item: state.getReducer,
  });

class App extends Component{
    constructor () {
        super();
        this.state ={
            items:[],
            
        };
    }

    componentDidMount () {
        console.log('mounting')
        this.props.dispatch({ type:'GET_ITEM'});
        console.log(this.props.state.getReducer);
        console.log(this.state)
    }

    render(){
        // let items = this.props.item.map((item) => {
        //     // console.log('location ',location);
        //     return ( <App key={item.id}
        //                     item={item}/> 
      
        //     )
        //   });
        return(
            <div className="app">
            <header className="app-header">
            <h1> Target Api Case Study </h1>
            <pre className="items">
            {/* {items} */}
            </pre>
            {this.state.getReducer}
            </header>
            </div>


        )
    }
}
export default connect(mapStateToProps)(App);
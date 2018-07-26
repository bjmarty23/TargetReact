import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppList from './components/AppList'
// import PropTypes from 'prop-types';
const mapStateToProps = state => ({
    state,
    item: state.getReducer,
  });

class App extends Component{
    constructor () {
        super();
        this.state ={
            items: '',
            
        };
    }

    componentDidMount () {
        console.log('mounting')
        this.props.dispatch({ type:'GET_ITEM'});
        console.log(this.props.state.getReducer);
        console.log(this.state)
        this.getdata();
    }
    // getItemDetails() {
    //     return this.props.getReducer.map((item) => {
    //         return <li key ={product_id}
    //         name= {product.item.product_description.title}/>
    //     })
    // }
    // // 
    render(){
        let items = this.props.getReducer.map((item) => {
              return ( <AppList key={item.id}
                              item={item}/> 
        
              )
            });
        return(
            <div className="app">
            <header className="app-header">
            <h1> Target Api Case Study </h1>
            <pre className="items">
            {/* {id} */}
            </pre>
           
            </header>
            </div>


        )
    }
}
export default connect(mapStateToProps)(App);
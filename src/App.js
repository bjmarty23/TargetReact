import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AppList from './components/AppList'
// import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    state,
    item: state.getReducer,
  });

class App extends Component{
    constructor () {
        super();
        this.state ={
            price: '',
            id:'',
            title:'',
        };
    }

    componentDidMount () {
        fetch('https://redsky.target.com/v2/pdp/tcin/{13860428}?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics/api/?results')
        .then(results=> {
            return results.json();
        }).then(data => {
            console.log(data)
        })
        this.setState=({item: {
            title: data.product.item.product_description.title
        }
        })






        // console.log('mounting')
        // this.props.dispatch({ type:'GET_ITEM'});

        // console.log(this.props.state.getReducer);
        // console.log(this.state)
        
    }
    // getItemDetails() {
    //     return this.props.getReducer.map((item) => {
    //         return <li key ={product_id}
    //         name= {product.item.product_description.title}/>
    //     })
    // }
    // // 
    render(){
        // let items = this.state.getReducer.map((item) => {
        //       return ( <li key={item.id}>
        //                       item={item}</li> 
        
        //       )
        //     });
        return(
            <div className="app">
            <header className="app-header">
            <h1> Target Api Case Study </h1>
            <pre className="items">
            {/* {items} */}
            </pre>
           
            </header>
            </div>


        )
    }
}
export default connect(mapStateToProps)(App);
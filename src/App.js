import React, { Component } from 'react';

import axios from 'axios'

class App extends Component{
    constructor () {
        super();
        this.state ={
            item:[]
        }
    }

    componentDidMount () {
        console.log('mounting')
    }

    render(){
        return(
            <div className="app">
            <header className="app-header">
            <h1> Target Api Case study </h1>
            </header>
            </div>


        )
    }
}
export default App;
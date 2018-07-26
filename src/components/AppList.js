import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state,
    item: state.getReducer,
});

class AppList extends Component (){
    constructor(){
        super();
        this.state = {
            item : '',
        }
    }

    render(){
        return(
            <div>
            {/* {items} */}
            </div>
    )
    }
}






  export default connect(mapStateToProps)(AppList);
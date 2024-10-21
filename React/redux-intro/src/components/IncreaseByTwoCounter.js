import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increasebytwoCounter} from "../redux/actions/counterActions"

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                 <button onClick={e=>{
                    this.props.dispatch(increasebytwoCounter())
                }}>2 Arttır</button>
            
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(increasebytwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
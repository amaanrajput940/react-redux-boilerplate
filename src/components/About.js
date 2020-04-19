import React, { Component } from 'react'
import {connect} from 'react-redux'
class About extends Component {
    render () {
        return (
            <h1>
                About
            </h1>
        )
    }
}

function mapStateToProps(state) {
    return ({
        authenticated: state.rootReducer.authenticated
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
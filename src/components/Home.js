import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeState } from '../store/action/action'
class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
            authenticated: 'false'
        }
    }
    changeData () {
        console.log('event fired');
    }

    changeStore () {
        this.props.changeStateToReducer(this.state.authenticated)
    }

    handleUsernameInput(event){
        this.setState({
            authenticated: 'true'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Home
                </h1>
                <input type="text" placeholder="Username" onChange={this.handleUsernameInput.bind(this)} />
                <button type="button" onClick={this.changeStore.bind(this)}>
                    Login
                </button>
                <p>Authenticated: {this.props.authenticated}</p>
            </div>
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
        changeStateToReducer: (authenticated) => {
            dispatch(changeState(authenticated))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
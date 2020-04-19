import React, { Component } from 'react'
import {Route, Router} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import history from './History'
class Routers extends Component {
    render () {
        return (
            <Router history={history}>
                <Route exact path="/"component={Home} />
                <Route exact path="/about"component={About} />
            </Router>
        )
    }
}

export default Routers
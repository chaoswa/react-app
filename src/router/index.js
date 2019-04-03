import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Hello from '../page/Hello'
import Detail from '../page/Detail'

class Routes extends Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Hello}/>
                    <Route path='detail' component={Detail}/>
                </div>
            </HashRouter>
        )
    }
}

export default Routes
import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../page/Home'
import Detail from '../page/Detail'

class Routes extends Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail' component={Detail}/>
                </div>
            </HashRouter>
        )
    }
}

export default Routes
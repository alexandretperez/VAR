import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import './App.css';
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={MainLayout} />
            </Router>
        );
    }
}

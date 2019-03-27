import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Heroes } from '../components/heroes/Heroes';
import { About } from '../components/about/About';
import { Messages } from '../components/messages/Messages';
import './MainLayout.css';
import { Television } from '../components/television/Television';

export class MainLayout extends Component {
    render() {
        return (
            <div className='ui fluid container'>
                <div className='ui top attached label'>MainLayout</div>
                <h1 className='title'>React App</h1>
                <div className='ui menu'>
                    <Link className='item' to='/heroes'>
                        Heroes
                    </Link>
                    <Link className='item' to='/tv'>
                        Television
                    </Link>
                    <Link className='item' to='/about'>
                        About
                    </Link>
                </div>

                <section className='ui grid'>
                    <div className='ten wide column'>
                        <div className='ui segment'>
                            <Route path='/' exact render={() => <Redirect to='/heroes' />} />
                            <Route path='/heroes' component={Heroes} />
                            <Route path='/tv' component={Television} />
                            <Route path='/about' component={About} />
                        </div>
                    </div>
                    <div className='six wide column'>
                        <Messages />
                    </div>
                </section>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { HeroesDetail } from './HeroesDetail';
import { HeroesList } from './HeroesList';

export class Heroes extends Component {
    state = {
        selectedHero: null
    };

    onAdd = () => {
        this.setState({
            selectedHero: { id: null, name: '' }
        });
    };

    onSelected = hero => {
        this.setState({
            selectedHero: hero
        });
    };

    onSaved = hero => {
        console.log('Hero saved!', hero);
        this.setState({
            selectedHero: { ...hero }
        });
        this.refs.heroesList.loadHeroes();
    };

    onDeleted = () => {
        console.log('Hero deleted!');
        this.setState({
            selectedHero: null
        });
        this.refs.heroesList.loadHeroes();
    };

    onCanceled = () => {
        console.log('Changes canceled!');
        this.setState({
            selectedHero: null
        });
    };

    render() {
        return (
            <div className='ui grid'>
                <div className='ui top left attached label'>Heroes</div>
                <div className='row'>
                    <div className='ten wide column'>
                        {this.state.selectedHero ? (
                            <HeroesDetail
                                hero={this.state.selectedHero}
                                saved={this.onSaved}
                                deleted={this.onDeleted}
                                canceled={this.onCanceled}
                            />
                        ) : (
                            <div className='ui massive circular icon green button' onClick={this.onAdd}>
                                <i className='plus icon' />
                            </div>
                        )}
                    </div>
                    <div className='six wide column'>
                        <HeroesList selected={this.onSelected} ref='heroesList' />
                    </div>
                </div>
                <div className='row'>
                    <div className='column' />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { HeroService } from '../../services/HeroService';
import PropTypes from 'prop-types';
import './HeroesList.css';

const heroService = new HeroService();

export class HeroesList extends Component {
    constructor() {
        super();
        this.state = {
            heroes: [],
            selectedHero: null,
            loading: false
        };
    }
    componentDidMount() {
        this.loadHeroes();
    }
    async loadHeroes() {
        this.setState({ loading: true });
        const heroes = await heroService.getHeroes();
        this.setState({ heroes, loading: false });
    }
    onSelect(hero) {
        this.setState({
            selectedHero: hero
        });

        this.props.selected(hero);
    }

    getClass(hero) {
        const { selectedHero } = this.state;
        return selectedHero && selectedHero.id === hero.id ? 'item active' : 'item';
    }
    render() {
        return (
            <div className='ui segment'>
                <div className='ui top left attached label'>HeroesList</div>
                <h5>Heroes Team</h5>
                <div className='scroller'>
                    <div className={'ui inverted dimmer' + (this.state.loading ? ' active' : '')}>
                        <div className='ui loader' />
                    </div>
                    <div className='ui divided selection list'>
                        {this.state.heroes.map(hero => (
                            <div className={this.getClass(hero)} key={hero.id} onClick={() => this.onSelect(hero)}>
                                {hero.name}
                                <br />
                                <small>{hero.id}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

HeroesList.propTypes = {
    selected: PropTypes.func
};

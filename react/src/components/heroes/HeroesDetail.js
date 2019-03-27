import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeroService } from '../../services/HeroService';

import './HeroesDetail.css';

const heroService = new HeroService();

export class HeroesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: props.hero,
            loading: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            hero: props.hero
        });
    }
    onSave = async () => {
        this.setState({ loading: true });
        const hero = await heroService.save(this.state.hero);
        this.setState({ loading: false, hero });
        this.props.saved(this.state.hero);
    };
    onDelete = async () => {
        this.setState({ loading: true });
        await heroService.delete(this.state.hero);
        this.setState({ loading: false });
        this.props.deleted();
    };
    onCancel = () => {
        this.props.canceled();
    };
    onNameChange = e => {
        this.setState({
            hero: Object.assign(this.state.hero, { name: e.target.value })
        });
    };
    render() {
        return (
            <div className={'ui card form' + (this.state.loading ? ' loading' : '')}>
                <div className='ui top left attached label'>HeroesDetail</div>
                <div className='content'>
                    <div className='header'>Hero Details</div>
                    <div className='description'>
                        <table className='ui definition table'>
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{this.state.hero.id}</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <div className='field'>
                                            <input
                                                type='text'
                                                placeholder="Enter hero's name..."
                                                value={this.state.hero.name}
                                                onChange={this.onNameChange}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='ui basic buttons'>
                            <div className='ui icon button' onClick={this.onSave}>
                                <i className='check icon' />
                                Save
                            </div>
                            <div className='ui icon button' onClick={this.onDelete}>
                                <i className='trash icon' />
                                Delete
                            </div>
                            <div className='ui icon button' onClick={this.onCancel}>
                                <i className='ban icon' />
                                Cancel
                            </div>
                        </div>
                        <div className='ui custom message'>
                            <span className='header'>{this.state.hero.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeroesDetail.propTypes = {
    hero: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    saved: PropTypes.func,
    deleted: PropTypes.func,
    canceled: PropTypes.func
};

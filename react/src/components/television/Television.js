import React, { Component } from 'react';
import { TelevisionService } from '../../services/TelevisionService';

const televisionService = new TelevisionService();

export class Television extends Component {
    state = {
        query: '',
        shows: [],
        loading: false
    };

    render() {
        return (
            <div>
                <div className='ui top left attached label'>Television</div>
                <div className='ui form'>
                    <div className='field'>
                        <div className={'ui icon input' + (this.state.loading ? ' loading' : '')}>
                            <input
                                type='text'
                                value={this.state.query}
                                name='query'
                                onChange={this.onChange}
                                onKeyDown={e => (e.key.toLowerCase() === 'enter' ? this.onSearch() : null)}
                                placeholder='Enter name or keywords. eg.: action, cars, music...'
                            />
                            <i className='circular search link icon' onClick={this.onSearch} />
                        </div>
                    </div>
                    <div className='ui divided items'>
                        {this.state.shows.map(show => (
                            <div className='item' key={show.id}>
                                {show.image ? <img className='image' src={show.image.medium} alt='' /> : ''}
                                <div className='content'>
                                    <div className='header'>{show.name}</div>
                                    <div className='description' dangerouslySetInnerHTML={{ __html: show.summary }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    onSearch = async () => {
        const { query } = this.state;
        this.setState({
            loading: true
        });
        const result = await televisionService.getShows(query);
        this.setState({ shows: result.map(p => p.show), loading: false });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
}

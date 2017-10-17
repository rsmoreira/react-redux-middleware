import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        //it binds the SearchBar props into the bounds of a specific method 
        //in this case, onInputChange. So, you will be able to access this._anyProp_
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        // Here we need to go and fetch some weather data.
    }

    render() {
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}
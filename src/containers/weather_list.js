// This is a container. On React Redux we always use a container 
// when the component needs to access data from ReactRedux. 

import React, {Component} from 'react';
// The 'connect' will give us the access to the data into the redux actions
import { connect } from 'react-redux'


class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    };
}

function mapStateToProps(state) {
    return {
        // we are specific using state.weather here because we assign the WeatherReducer to 
        // the 'weather' key into our combineReducers file (../reducers/index.js)
        weather : state.weather
    };
}

// ES6 version of the function above
// function mapStateToProps({weather}) {
//     return { weather };
// }

// It will connect our component to the mapStateToProps
export default connect(mapStateToProps)(WeatherList)
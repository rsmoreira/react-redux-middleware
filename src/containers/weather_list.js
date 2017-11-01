// This is a container. On React Redux we always use a container 
// when the component needs to access data from ReactRedux. 
import React, {Component} from 'react';
// The 'connect' will give us the access to the data into the redux actions
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {
    renderWeather(cityData) {

        const temps = cityData.list.map(weather => weather.main.temp)
        console.log(temps);
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>

            </tr>
        );
    }
    
    
    render() {

        // this.props.weather - 
        // it is the response and contains the data of the weather
        // of the city that you have made the request.
        // 
        // this.props.weather.map - 
        // here, the 'map' will iterate each content of the list 
        // (this.props.weather) and will pass this contant to our
        // function renderWeather. 
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
                    
                    { this.props.weather.map(this.renderWeather) }

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
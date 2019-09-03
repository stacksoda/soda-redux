import React from 'react';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather';

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelector extends React.Component {
    onChange = e => {
        const cityCode = e.target.value;
        console.log('cityCode :', cityCode);
        this.props.onSelectCity(cityCode);
    }
    render() {
        return (
            <select onChange={this.onChange}>
                {
                    Object.keys(CITY_CODES).map(
                        cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                    )
                }
            </select>
        )
    }
}
const mapDiapatchToProps = dispatch => {
    return {
        onSelectCity: cityCode => {
            dispatch(weatherActions.fetchWeather(cityCode))
        }
    }
}

export default connect(null, mapDiapatchToProps)(CitySelector);
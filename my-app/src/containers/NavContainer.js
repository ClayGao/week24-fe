import React, {Component} from 'react';
import { getWeather } from '../WebAPI'
import Nav from '../components/nav'
import * as actions from '../actions'
import { connect } from 'react-redux'

const NavContainer = props => {
    return <Nav {...props} />
}

const mapStateToProps = state => {
    return {
        weatherData: state.getWeatherReducer.weatherData,
        isLoadingGetWeatherData: state.getWeatherReducer.isLoadingGetWeatherData,
    }
}

const mapDispatchToProps = dispatch => {
    return {             
        getWeatherAPI: () => {
            dispatch(actions.getWeatherData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)
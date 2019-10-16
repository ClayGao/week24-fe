import * as actionTypes from './actionsTypes'
import * as WebAPI from './WebAPI'

// Action creator
export const getPosts = () => ({
    type: actionTypes.GET_POSTS,
    payload: WebAPI.getPosts()
})

export const getSinglePost = (postId) => ({
    type: actionTypes.GET_SINGLE_POST,
    payload: WebAPI.getSinglePost(postId)
})

export const deleteSinglePost = (postId) => ({
    type: actionTypes.DELETE_SINGLE_POST,
    payload: WebAPI.deleteSinglePost(postId)
})

export const beginEditSinglePost = (title, body) => ({
    type: actionTypes.BEGIN_EDIT_SINGLE_POST,
    title,
    body
})

export const editSinglePost = (postId, title, body) => ({
    type: actionTypes.EDIT_SINGLE_POST,
    payload: WebAPI.editSinglePost(postId, title, body)
})


export const getWeatherData = () => ({
    type: actionTypes.GET_WEATHER_DATA,
    payload: WebAPI.getWeather().then(resp => {
        let Weather = []
        let time = ''
        const weatherJSON = resp.data.cwbopendata.dataset.location[0].weatherElement
        for(var i = 0; i < 3; i++){
            if (i === 0) { time = '今早'}
            else if (i === 1) {time = '今晚'}
            else { time = '明日' }
            Weather.push(
                {
                    time,
                    Wx: weatherJSON[0].time[i].parameter.parameterName,
                    MaxT: weatherJSON[1].time[i].parameter.parameterName,
                    MinT: weatherJSON[2].time[i].parameter.parameterName,
                    CI: weatherJSON[3].time[i].parameter.parameterName,
                    PoP: weatherJSON[4].time[i].parameter.parameterName
                }
            ) 
        }
        return Weather;
    })
})

/*
export const getWeatherDataSuccess = (data) => ({
    type: actionTypes.GET_WEATHER_DATA_SUCCESS,
    data
})
*/


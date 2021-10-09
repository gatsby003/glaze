import backgroundService from "../services/background"
import dates from "../dates"

const backgroundReducer = (state = null, action) => {
    switch(action.type){
        case 'INIT':
            return action.data
        case 'CHANGE_BG':
            return action.data
        default:
            return state
    }
}

// reducer to set images and cache for tomorrow ,
// currrently switches to yesterdays image if internet is off 
// ideally should randomly select from the cache 
export const changeBg = () => {
    return async dispatch => {
        const today = dates.getToday()

        const result = await backgroundService.getBackGrounds()
        localStorage.setItem(today, JSON.stringify(result.today))
        return dispatch({
            type : 'CHANGE_BG',
            data : result.today,
        })
    }
}



export const initBg = () => {
    return async dispatch => {

        const today = dates.getToday()
        const tomorrow = dates.getTomorrow()
        const yesterday = dates.getYesterday()

        var backgrounds = {}
        const cache = await caches.open('glaze-cache')

        if (localStorage.getItem(today)){
            backgrounds = JSON.parse(localStorage.getItem(today))
        }else {
            try {
                backgrounds = await backgroundService.getBackGrounds()
                console.log(backgrounds)
                cache.add(backgrounds.today.url)
                cache.add(backgrounds.tomorrow.url)
                localStorage.setItem(today, JSON.stringify(backgrounds.today))
                localStorage.setItem(tomorrow, JSON.stringify(backgrounds.tomorrow))
            } catch(e) {
                backgrounds = JSON.parse(localStorage.getItem(yesterday))
            }
        }

        return dispatch({
            type : 'INIT',
            data : backgrounds
        })
    }
}


export default backgroundReducer
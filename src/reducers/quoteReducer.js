import quoteService from "../services/quotes";

const quoteReducer = (state = "", action) => {
    switch(action.type){
        case 'INITQUOTE':
            console.log(action.data)
            return action.data
        default:
            return state
    }
}

export const initQuotes = () => {
    return async dispatch => {
        var quote;
        
        if (!localStorage.getItem("quoteForToday")){
            quote = await quoteService.getQuotes()
            localStorage.setItem("quoteForToday", quote)
        }else {
            quote = localStorage.getItem("quoteForToday")
        }

        return dispatch({
            type : 'INITQUOTE',
            data : quote
        })
    }
}





export default quoteReducer




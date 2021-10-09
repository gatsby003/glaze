import axios from 'axios'

const api = "https://glaze-api.herokuapp.com/quote"

const getQuotes = async () => {
    const result = await axios.get(api)
    return result.data
}

export default { getQuotes }
import axios from "axios";

const api = "https://glaze-api.herokuapp.com/background"

const asObject = (result) => {
    return (
        {
            today : result.today.urls.full,
            tomorrow : result.tomorrow.urls.full,
        }
    )
}

const getBackGrounds = async () => {
    const result = await axios.get(api)
    console.log(result)
    return asObject(result.data)
}

export default { getBackGrounds } 
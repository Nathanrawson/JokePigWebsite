import axios from "axios";

axios.defaults.withCredentials = true;

export default axios.create({
    baseURL: 'https://veiybapi.com/',//'https://mlapi20220310230105.azurewebsites.net/',
    params: {

    }
});
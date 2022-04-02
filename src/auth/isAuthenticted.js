import MlApi from '../apis/MlApi'
import tokenCookie from '../components/GetCookie'
import Axios from 'axios';

const IsAuthenitcated = () => {
    if(tokenCookie("access_token").length > 1){
        console.log(tokenCookie("access_token"));
        return true;
    }
    return false
}
export default IsAuthenitcated
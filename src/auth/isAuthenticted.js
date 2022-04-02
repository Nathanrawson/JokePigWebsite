import MlApi from '../apis/MlApi'
import tokenCookie from '../components/GetCookie'
import Axios from 'axios';

const IsAuthenitcated = async () => {
    try{
    var response = await Axios({
        method: 'get',
        url: `https://veiybapi.com/auth/isauthenticated`,//'https://mlapi20220310230105.azurewebsites.net/project',
        headers: {
            'Authorization': `bearer ${tokenCookie("access_token")}`
        }
    });
    
    if(response.status === 200){
    return true;
    }
    
    return false;
}catch{
    return false;
}
}
export default IsAuthenitcated
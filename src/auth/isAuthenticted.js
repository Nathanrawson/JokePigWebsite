import MlApi from '../apis/MlApi'

const IsAuthenitcated = async () => {
    var response = await MlApi.get("/auth/isauthenticated");
    
    if(response.status === 200){
    return true;
    }
    return false;
}
export default IsAuthenitcated
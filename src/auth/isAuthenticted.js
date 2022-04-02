import MlApi from '../apis/MlApi'

const IsAuthenitcated = async () => {
    try{
    var response = await MlApi.get("/auth/isauthenticated");
    
    if(response.status === 200){
    return true;
    }
    
    return false;
}catch{
    return false;
}
}
export default IsAuthenitcated
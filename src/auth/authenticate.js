import tokenCookie from '../components/GetCookie'
import IsAuthenitcated from './isAuthenticted';

const Authenticate = () => {
    IsAuthenitcated().then((result) => {
    if(result){
        window.location.replace("/login");
    }
    })
}

export default Authenticate;
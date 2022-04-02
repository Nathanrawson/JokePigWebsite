import tokenCookie from '../components/GetCookie'
import IsAuthenitcated from './isAuthenticted';

const Authenticate = () => {
    if(!IsAuthenitcated()){
        window.location.replace("/login");
    }
}

export default Authenticate;
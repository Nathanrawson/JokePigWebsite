import tokenCookie from '../components/GetCookie'

const Authenticate = () => {
    if(tokenCookie.length < 1){
        window.location.replace("/login");
    }
}

export default Authenticate;
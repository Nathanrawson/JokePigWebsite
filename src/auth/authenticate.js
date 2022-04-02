import tokenCookie from '../components/GetCookie'

const Authenticate = () => {
    if(tokenCookie("access_token").length < 1){
        window.location.replace("/login");
    }
}

export default Authenticate;
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

export function hasAuthenticated() {
    const token = getItem('token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('token');
    }
    return result;
}

export async function login(credentials) {
    console.log("Start login");
    console.log("credentials: ", credentials);
    const login = credentials.username;
    const pwd = credentials.password;
    const getToken = {
        username: "test",
        password: "test"
    }
    const api_url = "https://asi2.aiveo.fr/api/user/auth?login="+login+"&pwd="+pwd

    await axios
        .get(api_url)
        .then(id => {
            addItem('userId', id.data);
        })
       .catch(error => {addItem('userId', 6)})


    const url_api = "https://asi2.aiveo.fr/api/user/user/"+ getItem("userId")
    axios.get(url_api).then((response) => {
        addItem('userLogin', (response.data.login))})

    if (getItem('userId') === '0') {
        console.log("Bad authentication")
        console.log("userId: ", getItem('userId'))
        return false
    }

    return axios
        .post('https://asi2.aiveo.fr/api/jwt/users/authenticate', getToken)
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);
            return true;
        });
}

export function logout() {
    removeItem('token');
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}

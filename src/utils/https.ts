import axios from "axios";

const instance = axios.create({
    baseURL: 'https://randomuser.me/',

});


export { instance as https }
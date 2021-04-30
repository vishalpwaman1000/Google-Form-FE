import axiosServices from "./axiosService";
let Config = require("../Configration/Configration");
const axiosService = new axiosServices();

export default class userServices {
  SignUp(data) {
    let url = Config.SignUp;
    return axiosService.post(url, data, false);
    }
    
    SignInEmail(data){
        let url = Config.
    }
}
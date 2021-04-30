const axios = require("axios").default;

export default class axiosService {
  post(url, data, isRequiredHeader = false, header) {
    return axios.post(url, data, isRequiredHeader && header);
  }

}

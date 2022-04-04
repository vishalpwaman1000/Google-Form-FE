const axios = require("axios").default;

export default class AxiosService {
  post(url, data, isRequiredHeader = false, header) {
    return axios.post(url, data, isRequiredHeader && header);
  }

}

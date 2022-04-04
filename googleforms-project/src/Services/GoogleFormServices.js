import AxiosService from './AxiosServices'
import Configuration from '../Configuration/Configuration'
const axiosService = new AxiosService()

export default class GoogleForm {
  Registration(data) {
    let url = Configuration.Registration
    // console.log('Data : ', data)
    return axiosService.post(url, data, false)
  }

  SignInEmailID(data) {
    let url = Configuration.SignIn_EmailID
    return axiosService.post(url, data, false)
  }

  SignIn(data) {
    let url = Configuration.SignIn
    return axiosService.post(url, data, false)
  }

  EmailIDAvailability(data) {
    let url = Configuration.EmailIDAvailability
    return axiosService.post(url, data, false)
  }

  ResetPassword(data) {
    let url = Configuration.ResetPassword
    return axiosService.post(url, data, false)
  }

  FindFirstLastName(data) {
    let url = Configuration.FindFirstLastName
    return axiosService.post(url, data, false)
  }

  SendVerificationCodeOnEmail(data) {
    let url = Configuration.SendVerificationCodeOnEmailOrMobile
    return axiosService.post(url, data, false)
  }

  VerifyEmailVerificationCode(data) {
    let url = Configuration.VerifyEmailVerificationCode
    console.log('url : ', url)
    return axiosService.post(url, data, false)
  }

  SendEmailIdOnRecoveryAccount(data) {
    let url = Configuration.SendEmailIdOnRecoveryAccount
    return axiosService.post(url, data, false)
  }
}

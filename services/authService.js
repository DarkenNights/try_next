import axios from 'axios'

const BASE_URL = '/api/auth/'

class AuthService {
  async register(name, email, password) {
    return axios({
      method: 'POST',
      url: BASE_URL + 'register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
        email,
        password,
      },
    })
  }
}

export default new AuthService()

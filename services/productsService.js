import axios from 'axios'

const BASE_URL = process.env.NEXTAUTH_URL + '/api/products/'

class ProductsService {
  async getAll() {
    return axios({
      method: 'GET',
      url: BASE_URL,
    })
  }

  async add(product) {
    return axios({
      method: 'POST',
      url: BASE_URL + 'add',
      headers: {
        'Content-Type': 'application/json',
      },
      data: product,
    })
  }

  async remove(name) {
    return axios({
      method: 'POST',
      url: BASE_URL + 'remove',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
      },
    })
  }
}

export default new ProductsService()

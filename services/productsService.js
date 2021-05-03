import axios from 'axios'

const BASE_URL = 'api/products/'

class ProductsService {
  async getAll() {
    return axios({
      method: 'GET',
      url: BASE_URL + 'all',
    })
  }

  async add(product) {
    const Authorization = authHeader()
    return axios({
      method: 'POST',
      url: BASE_URL + 'add',
      headers: {
        'Content-Type': 'application/json',
        Authorization,
      },
      data: product,
    })
  }

  async delete(name) {
    const Authorization = authHeader()
    return axios({
      method: 'POST',
      url: BASE_URL + 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization,
      },
      data: {
        name,
      },
    })
  }
}

export default new ProductsService()

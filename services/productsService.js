import axios from 'axios'

class ProductsService {
  constructor() {
    this.BASE_URL = process.env.NEXTAUTH_URL + '/api/products/'
  }

  async getAll() {
    return axios({
      method: 'GET',
      url: this.BASE_URL + 'get',
    })
  }

  async add(product) {
    console.log(process.env.NEXTAUTH_URL)
    return axios({
      method: 'POST',
      url: this.BASE_URL + 'add',
      headers: {
        'Content-Type': 'application/json',
      },
      data: product,
    })
  }

  async remove(name) {
    return axios({
      method: 'POST',
      url: this.BASE_URL + 'remove',
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

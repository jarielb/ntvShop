import API from './API'

class Product extends API {
  constructor (token) {
    super(token)
    this.getAll = this.getAll.bind(this)
  }

  getAll () {
    return this.get('/products')
  }
}

export default Product
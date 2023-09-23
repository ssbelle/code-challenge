import axios from 'axios'
import type { Product } from './types'

const fetchProducts = async () => {
  const URL = 'http://localhost:3000/products'
  const response = await axios.get<Product[]>(URL)
  return response.data
}

export default fetchProducts

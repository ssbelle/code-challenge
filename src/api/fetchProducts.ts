import axios from 'axios'
import type { Product } from './types'

const fetchProducts = async (query: String) => {
  try {
    const BASE_URL = import.meta.env.VITE_APP_API_URL
    const URL = `${BASE_URL}/products?q=${query}`
    const response = await axios.get<Product[]>(URL)
    return response.data
  } catch (error) {
    console.error('Error:', error)
  }
}

export default fetchProducts

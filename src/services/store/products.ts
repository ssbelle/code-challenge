import { defineStore } from 'pinia'
import fetchProducts from '@/services/api/fetchProducts'
import type { Product } from '@/services/api/types'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export interface ProductsState {
  isLoading: Boolean
  products: Product[]
  query: String
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    isLoading: false,
    products: [],
    query: ''
  }),
  actions: {
    async [FETCH_PRODUCTS](query: String) {
      this.isLoading = true
      const products = await fetchProducts(query)
      this.products = products
      this.isLoading = false
    }
  }
})

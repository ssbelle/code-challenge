import { defineStore } from 'pinia'
import fetchProducts from '@/api/fetchProducts'
import type { Product } from '@/api/types'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SORT_BY_ASCENDING = 'SORT_BY_ASCENDING'
export const SORT_BY_DESCENDING = 'SORT_BY_DESCENDING'
export const FILTERED_PRODUCTS = 'FILTERED_PRODUCTS'

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
      this.query = ''
      this.isLoading = false
    }
  },
  getters: {
    [FILTERED_PRODUCTS]() {
      return this.products
    },
    [SORT_BY_ASCENDING]() {
      return this.products.sort((a: Product, b: Product) => a.total - b.total)
    },
    [SORT_BY_DESCENDING]() {
      return this.products.sort((a: Product, b: Product) => b.total - a.total)
    }
  }
})

import { defineStore } from 'pinia'

import fetchProducts from '@/services/api/fetchProducts'

import type { Product } from '@/services/api/types'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export interface ProductsState {
  products: Product[]
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: []
  }),
  actions: {
    async [FETCH_PRODUCTS]() {
      const products = await fetchProducts()
      this.products = products
    }
  }
})

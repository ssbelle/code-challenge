import type { Mock } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { useProductsStore } from '@/store/products'

vi.mock('axios')
const axiosGetMock = axios.get as Mock
const query = ''

describe('product store', () => {
  describe('state', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('will store product list', () => {
      const store = useProductsStore()
      expect(store.products).toEqual([])
    })
  })

  describe('actions', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    describe('FETCH_PRODUCTS', () => {
      it('makes an API request and stores the received products', async () => {
        axiosGetMock.mockResolvedValue({ data: ['Product 1', 'Product 2'] })
        const store = useProductsStore()
        await store.FETCH_PRODUCTS(query)
        expect(store.products).toEqual(['Product 1', 'Product 2'])
      })
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    describe('SORT_BY_ASCENDING', () => {
      it('will sort the order of the products based on ascending total', async () => {
        const store = useProductsStore()
        store.products = [
          {
            product: 'Macbook Pro 16 inch (2020 ) For Sale',
            serial: 'BA9212320',
            id: 1374,
            quantity: 122,
            total: 854.08,
            status: 'purple'
          },
          {
            product: 'Macbook Air 13 inch(2020 ) For Sale',
            serial: 'KH9212924',
            id: 9374,
            quantity: 134,
            total: 779.58,
            status: 'purple'
          },
          {
            product: 'Heimer Miller Sofa (Mint Condition)',
            serial: 'SD9212969',
            id: 5560,
            quantity: 26,
            total: 275.43,
            status: 'yellow'
          }
        ]

        const sorted = [
          {
            product: 'Heimer Miller Sofa (Mint Condition)',
            serial: 'SD9212969',
            id: 5560,
            quantity: 26,
            total: 275.43,
            status: 'yellow'
          },
          {
            product: 'Macbook Air 13 inch(2020 ) For Sale',
            serial: 'KH9212924',
            id: 9374,
            quantity: 134,
            total: 779.58,
            status: 'purple'
          },
          {
            product: 'Macbook Pro 16 inch (2020 ) For Sale',
            serial: 'BA9212320',
            id: 1374,
            quantity: 122,
            total: 854.08,
            status: 'purple'
          }
        ]
        const result = store.SORT_BY_ASCENDING

        expect(result).toStrictEqual(sorted)
      })
    })

    describe('SORT_BY_DESCENDING', () => {
      it('will sort the order of the products based on descending total', async () => {
        const store = useProductsStore()
        store.products = [
          {
            product: 'Macbook Pro 16 inch (2020 ) For Sale',
            serial: 'BA9212320',
            id: 1374,
            quantity: 122,
            total: 854.08,
            status: 'purple'
          },
          {
            product: 'Macbook Air 13 inch(2020 ) For Sale',
            serial: 'KH9212924',
            id: 9374,
            quantity: 134,
            total: 779.58,
            status: 'purple'
          },
          {
            product: 'Heimer Miller Sofa (Mint Condition)',
            serial: 'SD9212969',
            id: 5560,
            quantity: 26,
            total: 275.43,
            status: 'yellow'
          }
        ]

        const sorted = [
          {
            product: 'Macbook Pro 16 inch (2020 ) For Sale',
            serial: 'BA9212320',
            id: 1374,
            quantity: 122,
            total: 854.08,
            status: 'purple'
          },
          {
            product: 'Macbook Air 13 inch(2020 ) For Sale',
            serial: 'KH9212924',
            id: 9374,
            quantity: 134,
            total: 779.58,
            status: 'purple'
          },
          {
            product: 'Heimer Miller Sofa (Mint Condition)',
            serial: 'SD9212969',
            id: 5560,
            quantity: 26,
            total: 275.43,
            status: 'yellow'
          }
        ]
        const result = store.SORT_BY_DESCENDING

        expect(result).toStrictEqual(sorted)
      })
    })
  })
})

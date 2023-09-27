import type { Mock } from 'vitest'
import axios from 'axios'
import fetchProducts from '@/api/fetchProducts'

vi.mock('axios')

const axiosGetMock = axios.get as Mock
const query = ''

describe('fetchProducts', () => {
  describe('when the api call suceeds', () => {
    beforeEach(() => {
      axiosGetMock.mockResolvedValue({
        data: [
          {
            quantity: 34,
            product: 'Ipad'
          }
        ]
      })
    })

    it('should fetch products from api', async () => {
      await fetchProducts(query)

      expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:3000/products?q=${query}`
      )
    })

    it('should extract products from api response', async () => {
      const products = await fetchProducts(query)

      expect(products).toEqual([{ quantity: 34, product: 'Ipad' }])
    })
  })

  describe('when api call fails', () => {
    it('should return empty products list', async () => {
      const message = 'Network Error'
      axiosGetMock.mockRejectedValueOnce(new Error(message))

      const result = await fetchProducts(query)

      expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:3000/products?q=${query}`
      )
      expect(result).toEqual(undefined)
    })
  })
})

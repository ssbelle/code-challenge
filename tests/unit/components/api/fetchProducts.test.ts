import type { Mock } from 'vitest'
import axios from 'axios'

import fetchProducts from '@/services/api/fetchProducts'

vi.mock('axios')

const axiosGetMock = axios.get as Mock

describe('fetchProducts', () => {
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
    await fetchProducts()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/products')
  })

  it('should extracts products from api response', async () => {
    const products = await fetchProducts()
    expect(products).toEqual([{ quantity: 34, product: 'Ipad' }])
  })
})

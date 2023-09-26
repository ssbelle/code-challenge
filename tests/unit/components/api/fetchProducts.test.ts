import type { Mock } from 'vitest'
import axios from 'axios'
import fetchProducts from '@/services/api/fetchProducts'

vi.mock('axios')

const axiosGetMock = axios.get as Mock
const query = ''

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
    await fetchProducts(query)
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:3000/products?q=${query}`
    )
  })

  it('should extracts products from api response', async () => {
    const products = await fetchProducts(query)
    expect(products).toEqual([{ quantity: 34, product: 'Ipad' }])
  })
})

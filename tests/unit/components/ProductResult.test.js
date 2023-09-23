import { render, screen } from '@testing-library/vue'
import ProductResult from '@/components/molecules/ProductResult.vue'

describe('ProductResult', () => {
  const createProductProps = (productProps = {}) => ({
    id: 1374,
    quantity: 122,
    product: 'Macbook Pro',
    serial: 'BA9212320',
    total: '854',
    status: 'green',
    ...productProps
  })

  const renderProductResults = (productProps) => {
    render(ProductResult, {
      props: {
        product: {
          ...productProps
        }
      }
    })
  }

  it('Should render product id', () => {
    const productProps = createProductProps({ id: 1374 })
    renderProductResults(productProps)
    expect(screen.getByText(1374)).toBeInTheDocument()
  })

  it('Should render product quantity', () => {
    const productProps = createProductProps({ quantity: 122 })
    renderProductResults(productProps)
    expect(screen.getByText(122)).toBeInTheDocument()
  })

  it('Should render product name', () => {
    const productProps = createProductProps({ product: 'Macbook Pro' })
    renderProductResults(productProps)
    expect(screen.getByText('Macbook Pro')).toBeInTheDocument()
  })

  it('Should render product serial', () => {
    const productProps = createProductProps({ serial: 'BA9212320' })
    renderProductResults(productProps)
    expect(screen.getByText('BA9212320')).toBeInTheDocument()
  })

  it('Should render product price', () => {
    const productProps = createProductProps({ total: '854' })
    renderProductResults(productProps)
    expect(screen.getByText('$854')).toBeInTheDocument()
  })
})

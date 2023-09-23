<template>
  <div v-if="useMobileProductListData" class="product-result-wrapper">
    <div class="product-column">
      {{ productName }}
      <span class="product-sku"
        >{{ productSku }} - Qty: {{ productQuantity }}</span
      >
    </div>
  </div>
  <div v-else class="product-result-wrapper">
    <div class="id-column">{{ productID }}</div>
    <section class="status-column">
      <ProductStatus :variant="productStatus"></ProductStatus>
    </section>
    <div class="quantity-column">
      {{ productQuantity }}
    </div>
    <div class="product-column">
      {{ productName }}
      <span class="product-sku">{{ productSku }}</span>
    </div>
    <div class="price-column">${{ productPrice }}</div>
  </div>
</template>

<script lang="ts">
import ProductStatus from '@/components/atoms/ProductStatus.vue'

export default {
  name: 'ProductResult',
  setup() {
    return {}
  },
  props: {
    product: {
      type: Object
    },
    mobile: {
      type: Boolean
    }
  },
  components: { ProductStatus },
  computed: {
    productID() {
      return `${this.product.id}`
    },
    productQuantity() {
      return `${this.product.quantity}`
    },
    productName() {
      return `${this.product.product}`
    },
    productSku() {
      return `${this.product.serial}`
    },
    productPrice() {
      return `${this.product.total}`
    },
    productStatus() {
      return `${this.product.status}`
    },
    useMobileProductListData() {
      return this.mobile
    }
  }
}
</script>

<style lang="scss">
.product-result-wrapper {
  display: flex;
  color: var(--black-200);
  font-family: var(--font-family-nunito);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  gap: 0.625rem;
  box-shadow: 0px -1px 0px 0px #e4e4ef inset;
  justify-content: center;

  div:nth-last-child(1) {
    border-left: 2px solid #e4e4ef;
  }

  .id-column {
    width: 4.375rem;
    display: flex;
    // flex-shrink: 0;
    flex-grow: 1;
    padding: 1.125rem 1rem;
    align-items: center;
  }
  .status-column {
    width: 9rem;
    display: flex;
    // flex-shrink: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1.125rem 1rem;
  }
  .quantity-column {
    width: 7.8125rem;
    display: flex;
    // flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    padding: 1.125rem 1rem;
  }
  .product-column {
    display: flex;
    flex-direction: column;
    width: 39.9rem;
    // flex-shrink: 0;
    flex-grow: 1;
    align-items: flex-start;
    gap: 0;
    padding: 1.125rem 1rem;

    .product-sku {
      color: var(--gray-500);
      font-size: 0.75rem;
    }
  }

  .price-column {
    width: 10.6875rem;
    display: flex;
    // flex-shrink: 0;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 1.125rem 1rem;
  }
}

// Mobile Styles
@media (max-width: 1177px) {
  .product-result-wrapper .status-column {
    display: none;
    width: 0;
  }
}

@media (max-width: 884px) {
  .product-result-wrapper .product-column {
    border-left: none;
    padding: 0.5rem 1.12rem;
  }
  .product-result-wrapper div:nth-last-child(1) {
    border-left: none;
  }
}
</style>

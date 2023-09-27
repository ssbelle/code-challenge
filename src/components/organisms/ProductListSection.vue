<template>
  <section class="product-stats">
    <div class="product-table-title">Products</div>
    <div class="product-result-count">10 of 64</div>
  </section>
  <div v-if="useMobileProductList()" class="product-list">
    <section class="product-table">
      <div class="product-table-headers">
        <div class="product-table-column product-column">Product Name</div>
      </div>
      <div class="product-table-results">
        <ProductResult
          v-for="product in this.products"
          :key="product['id']"
          :product="product"
          :mobile="true"
          @click="showModalToggle"
        />
      </div>
    </section>
  </div>
  <div v-else class="product-list">
    <section class="product-table">
      <div class="product-table-headers">
        <div class="product-table-column id-column">ID</div>
        <div class="product-table-column status-column">Status</div>
        <div class="product-table-column quantity-column">Quantity</div>
        <div class="product-table-column product-column">Product Name</div>
        <div class="product-table-column price-column">Price</div>
      </div>
      <div class="product-table-results">
        <ProductResult
          v-for="product in this.products"
          :key="product['id']"
          :product="product"
          :mobile="false"
          @click="showModalToggle"
        />
      </div>
    </section>
  </div>
  <ModalWrapper :showModalToggle="showModalToggle" :showModal="showModal" />
</template>

<script lang="ts">
import ModalWrapper from '@/components/molecules/ModalWrapper.vue'
import ProductResult from '@/components/molecules/ProductResult.vue'

export default {
  name: 'ProductListSection',
  setup() {
    return {}
  },
  props: {
    products: {
      type: Array
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  data() {
    return {
      showModal: false,
      width: 885
    }
  },
  components: { ProductResult, ModalWrapper },
  computed: {},
  methods: {
    showModalToggle() {
      this.showModal = !this.showModal
    },
    useMobileProductList() {
      if (this.width <= 884) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .product-table {
    margin: 0 8rem 11.13rem 8rem;
    border-radius: 0.5rem;
    border: 1px solid var(--Border, #e4e4ef);
  }

  .product-table-headers {
    display: flex;
    justify-content: center;
    max-width: 1440px;
    flex-grow: 1;
    color: var(--black-200);
    font-family: var(--font-family-nunito);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    gap: 0.625rem;
    line-height: 1.25rem;
    box-shadow: 0px -1px 0px 0px #e4e4ef inset;

    .product-table-column {
      display: flex;
      flex-direction: column;
      padding: 1.125rem 1rem;
      gap: 0.625rem;
    }

    .id-column {
      width: 4.375rem;
      display: flex;
      // flex-shrink: 0;
      flex-grow: 1;
    }
    .status-column {
      width: 9rem;
      // flex-shrink: 0;
      flex-grow: 1;
      align-items: center;
    }
    .quantity-column {
      width: 7.8125rem;
      // flex-shrink: 0;
      flex-grow: 0;
      align-items: center;
    }
    .product-column {
      width: 39.9rem;
      // flex-shrink: 0;
      flex-grow: 1;
      align-items: center;
    }

    .price-column {
      width: 10.6875rem;
      // flex-shrink: 0;
      flex-grow: 1;
      align-items: center;
      border-left: 2px solid #e4e4ef;
    }
  }
  .product-table-results {
    div:nth-last-child(1) {
      box-shadow: none;
    }
  }
}

.product-stats {
  display: flex;
  margin: 0 0 0.25rem 8rem;

  .product-table-title {
    color: var(--black-200);
    font-family: var(--font-family-nunito);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
    margin-right: 1.13rem;
  }

  .product-result-count {
    color: var(--gray-500);
    font-family: var(--font-family-nunito);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
  }
}

//  Mobile Styles
@media (max-width: 884px) {
  .product-stats {
    margin: 0 0 1.19rem 8rem;
  }
}

@media (max-width: 1177px) {
  .product-list .product-table-headers .status-column {
    display: none;
    width: 0;
  }
}

@media (max-width: 680px) {
  .product-list .product-table {
    margin: 0 2.2rem 1.44rem;
  }
  .product-stats {
    margin: 0 0 1.19rem 2.2rem;
  }
}
</style>

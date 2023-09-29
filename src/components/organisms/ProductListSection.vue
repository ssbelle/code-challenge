<template>
  <ProductStats
    :totalProductsCount="10"
    :productResultCount="this.products.length"
  />
  <div class="product-list">
    <section class="product-table">
      <ProductTableHeaders
        :headers="isMobileOrTablet ? mobileHeaders : desktopHeaders"
      />
      <ProductResultsWrapper
        :productsToDisplay="this.products"
        :showModalToggle="showModalToggle"
      />
    </section>
  </div>
  <ModalWrapper :showModalToggle="showModalToggle" :showModal="showModal" />
</template>

<script lang="ts" setup name="ProductListSection">
import { ref } from 'vue'
import ModalWrapper from '@/components/molecules/ModalWrapper.vue'
import ProductTableHeaders from '@/components/atoms/ProductTableHeaders.vue'
import ProductResultsWrapper from '@/components/molecules/ProductResultsWapper.vue'
import ProductStats from '@/components/atoms/ProductStats.vue'
import { mobileHelper } from '@/composables/mobileHelper'

const showModal = ref(false)

const showModalToggle = () => {
  showModal.value = !showModal.value
}

defineProps({
  products: {
    type: Array
  }
})

const isMobileOrTablet = mobileHelper()
const mobileHeaders = ['Product Name']
const desktopHeaders = ['ID', 'Status', 'Quantity', 'Product Name', 'Prices']
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
      flex-grow: 1;
    }
    .status-column {
      width: 9rem;
      flex-grow: 1;
      align-items: center;
    }
    .quantity-column {
      width: 7.8125rem;
      flex-grow: 0;
      align-items: center;
    }
    .product-name-column {
      width: 39.9rem;
      flex-grow: 1;
      align-items: center;
    }

    .prices-column {
      width: 10.6875rem;
      flex-grow: 1;
      align-items: center;
      border-left: 2px solid #e4e4ef;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  .product-table-results {
    div:nth-last-child(1) {
      box-shadow: none;
    }
  }
}

.filter-by-icon {
  margin-left: 1rem;
}

//  Mobile Styles
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
}
</style>

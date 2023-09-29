<template>
  <section v-if="this.productsToDisplay.length > 0">
    <div class="product-table-results" @click="this.showModalToggle">
      <ProductResult
        v-for="product in props.productsToDisplay"
        :key="product['id']"
        :product="product"
      />
    </div>
  </section>
  <section class="zero-results" v-else>
    Sorry there are no results from that query. Plaese search for something
    else.
  </section>
</template>

<script lang="ts" setup name="ProductResultsWrapper">
import ProductResult from '@/components/molecules/ProductResult.vue'

const props = defineProps({
  productsToDisplay: {
    type: Array
  },
  showModalToggle: {
    type: Function
  }
})
</script>

<style lang="scss">
.product-table-results {
  div:nth-last-child(1) {
    box-shadow: none;
  }
}

.zero-results {
  display: flex;
  color: var(--black-200);
  font-family: var(--font-family-nunito);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  justify-content: center;
  padding: 1rem;
}
</style>

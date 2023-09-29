<template>
  <section class="product-stats">
    <div class="product-table-title">Products</div>
    <div class="product-result-count">
      {{ this.productResultCount }} of {{ this.totalProductsCount }}
    </div>
  </section>
</template>

<script lang="ts" setup name="ProductStats">
defineProps({
  productResultCount: {
    type: Number
  },
  totalProductsCount: {
    type: Number
  }
})
</script>

<style lang="scss">
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

@media (max-width: 680px) {
  .product-stats {
    margin: 0 0 1.19rem 2.2rem;
  }
}
</style>

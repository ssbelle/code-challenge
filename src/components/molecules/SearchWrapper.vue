<template>
  <section class="search-wrapper">
    <InputBox />
    <BaseButton
      variant="primary"
      text="Search"
      v-on:click="filterProductsBySearch"
    />
  </section>
</template>

<script setup lang="ts" name="SearchWrapper">
import { useProductsStore } from '@/store/products'
import InputBox from '@/components/atoms/InputBox.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const productsStore = useProductsStore()

const filterProductsBySearch = () => {
  productsStore.FETCH_PRODUCTS(productsStore.query)
}
</script>

<style lang="scss">
.search-wrapper {
  display: flex;
  flex: 2;
  order: 1;
}

// Mobile Styles
@media (max-width: 884px) {
  .search-wrapper {
    order: 2;
    margin-top: 1.38rem;
  }
}
</style>

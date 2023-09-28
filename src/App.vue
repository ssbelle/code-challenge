<template>
  <HeaderSection />
  <ProductListSection :products="products" />
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia'

import { useProductsStore, FETCH_PRODUCTS } from '@/store/products'
import HeaderSection from '@/components/organisms/HeaderSection.vue'
import ProductListSection from '@/components/organisms/ProductListSection.vue'

export default {
  setup() {
    return {}
  },
  computed: {
    ...mapState(useProductsStore, {
      products: 'products'
    })
  },
  mounted() {
    this.FETCH_PRODUCTS('')
  },
  components: {
    HeaderSection,
    ProductListSection
  },
  methods: {
    ...mapActions(useProductsStore, [FETCH_PRODUCTS])
  }
}
</script>

<style lang="scss"></style>

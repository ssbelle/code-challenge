<template>
  <div class="product-table-headers">
    <div
      v-for="header in this.headers"
      :key="header"
      @click="includeSortBy(header) ? filterBy() : null"
      :class="['product-table-column', getClass(header)]"
    >
      {{ header }}
      <div v-if="includeSortBy(header)"><BaseSortBy /></div>
    </div>
  </div>
</template>

<script lang="ts" setup name="ProductTableHeaders">
import { useProductsStore } from '@/store/products'
import BaseSortBy from '@/components/atoms/BaseSortBy.vue'

defineProps({
  headers: {
    type: Array
  },
  isMobile: {
    type: Boolean
  }
})

const includeSortBy = (headerText: string) => {
  if (headerText === 'Prices') {
    return true
  } else {
    return false
  }
}

const filterBy = () => {
  const productsStore = useProductsStore()
  productsStore.SORT_BY_ASCENDING
}

const getClass = (text: string) => {
  return text.toLowerCase().replace(' ', '-').concat('-', 'column')
}
</script>

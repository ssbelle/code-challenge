<template>
  <section class="product-status-wrapper">
    <span :class="['product-status-bubble', variant]">Status</span>
  </section>
</template>

<script lang="ts" setup name="ProductStatus">
defineProps({
  variant: {
    type: String
  }
})
</script>

<style lang="scss">
.product-status-wrapper > .product-status-bubble {
  border-left: none;
}

.product-status-bubble {
  display: flex;
  padding: 0.25rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border-left: none;
  text-align: center;
  font-family: var(--font-family-nunito);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
}

.purple {
  background: var(--purple-300);
  color: var(--purple-100);
}
.green {
  background: var(--status-bg-green, #ebf6eb);
  color: var(--status-green, #31aa27);
}
.yellow {
  background: var(--status-bg-orange, #fff4e4);
  color: var(--status-orange, #e99518);
}

.red {
  background: var(--status-bg-red, #fff0f0);
  color: var(--status-red, #f93232);
}
</style>

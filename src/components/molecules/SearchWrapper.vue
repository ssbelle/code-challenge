<template>
  <section class="search-wrapper">
    <InputBox />
    <BaseButton variant="primary" text="Search" />
  </section>
</template>

<script lang="ts">
import InputBox from '@/components/atoms/InputBox.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

export default {
  name: 'SearchWrapper',
  setup() {
    return {}
  },
  components: { InputBox, BaseButton }
}
</script>

<style lang="scss">
.search-wrapper {
  display: flex;
}
</style>

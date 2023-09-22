<template>
  <header>
    <section class="header">
      <LogoWrapper />
      <SearchWrapper />
      <SettingsWrapper />
    </section>
  </header>
</template>

<script lang="ts">
import LogoWrapper from '@/components/molecules/LogoWrapper.vue'
import SearchWrapper from '@/components/molecules/SearchWrapper.vue'
import SettingsWrapper from '@/components/molecules/SettingsWrapper.vue'

export default {
  name: 'HeaderSection',
  setup() {
    return {}
  },
  components: {
    LogoWrapper,
    SearchWrapper,
    SettingsWrapper
  }
}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: center;

  .header {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    max-width: 1440px;
    margin: 5rem 8rem 4.75rem;
  }
}
</style>

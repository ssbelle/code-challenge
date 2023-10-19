<template>
  <header class="header">
    <LogoWrapper />
    <SearchWrapper />
    <SettingsWrapper />
  </header>
</template>

<script lang="ts" setup name="HeaderSection">
import LogoWrapper from '@/components/molecules/LogoWrapper.vue'
import SearchWrapper from '@/components/molecules/SearchWrapper.vue'
import SettingsWrapper from '@/components/molecules/SettingsWrapper.vue'
</script>

<style lang="scss">
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  max-width: 1440px;
  margin: 5rem 8rem 4.75rem;
}

//  Mobile Styles
@media (max-width: 884px) {
  .header {
    margin: 5rem 8rem 1.13rem;
  }
}

@media (max-width: 680px) {
  .header {
    margin: 2.5rem 2.13rem 1.13rem;
  }
}
</style>

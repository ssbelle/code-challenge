<template>
  <section class="logo-wrapper">
    <img alt="app-logo" class="logo" src="@/assets/logo.svg" />
    <img
      alt="app-logo-title"
      class="logo-title"
      src="@/assets/logo-title.svg"
    />
  </section>
</template>

<script lang="ts">
export default {
  name: 'LogoWrapper',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss">
.logo-wrapper {
  display: flex;
  align-items: center;
  margin-right: 19.83rem;

  .logo {
    width: 2.91444rem;
    height: 2.74969rem;
    flex-shrink: 0;
  }

  .logo-title {
    width: 9.68388rem;
    height: 1.98963rem;
    flex-shrink: 0;
    margin-left: 6px;
  }
}
</style>

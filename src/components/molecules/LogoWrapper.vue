<template>
  <section class="logo-wrapper">
    <BaseIcon
      name="app-logo"
      class="app-logo"
      width="47"
      height="44"
      viewBox="0 0 47 44"
      iconColor="none"
    >
      <AppLogo />
    </BaseIcon>
    <BaseIcon
      name="logo-title"
      class="logo-title"
      width="156px"
      height="32px"
      viewBox="0 0 156 32"
      iconColor="none"
    >
      <LogoTitle />
    </BaseIcon>
  </section>
</template>

<script lang="ts" setup name="LogoWrapper">
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import LogoTitle from '@/components/icons/LogoTitle.vue'
import AppLogo from '@/components/icons/AppLogo.vue'
</script>

<style lang="scss">
.logo-wrapper {
  display: flex;
  align-items: center;
  flex: 4;

  .app-logo {
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

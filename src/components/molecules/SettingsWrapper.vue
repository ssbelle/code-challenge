<template>
  <section v-if="isMobileOrTablet" class="settings-mobile-menu-wrapper">
    <BaseIcon
      name="mobile-menu-icon"
      class="mobile-menu-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      iconColor="none"
      ><MobileMenuIcon />
    </BaseIcon>
  </section>
  <section v-else class="settings-wrapper">
    <BaseIcon
      name="settings-icon"
      class="settings-icon icon-wrapper"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      iconColor="none"
    >
      <SettingsIcon />
    </BaseIcon>
    <BaseIcon
      name="notifications-icon"
      class="notifications-icon icon-wrapper"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      iconColor="none"
    >
      <NotificationsIcon />
    </BaseIcon>

    <div class="user-login-wrapper">
      <BaseIcon
        name="user-icon"
        class="user-icon icon-wrapper"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        iconColor="none"
      >
        <UserIcon />
      </BaseIcon>
      <span class="user-name">Adriana Arias</span>
    </div>
  </section>
</template>

<script lang="ts" setup name="SettingsWrapper">
import NotificationsIcon from '@/components/icons/NotificationsIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import MobileMenuIcon from '@/components/icons/MobileMenuIcon.vue'
import { mobileHelper } from '@/composables/mobileHelper'

const isMobileOrTablet = mobileHelper()
</script>

<style lang="scss">
.settings-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  flex: 2;
  order: 2;
}

.user-login-wrapper {
  display: flex;
}

.icon-wrapper {
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 0.5rem;
}

.user-name {
  display: flex;
  width: 6.75rem;
  height: 2.75rem;
  flex-direction: column;
  justify-content: center;
  color: #605dec;
  font-family: var(--font-family-inter);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0175rem;
}

// Mobile Styles
.settings-mobile-menu-wrapper {
  margin-left: 2rem;
  display: flex;
  align-self: center;
}

@media (max-width: 885px) {
  .settings-wrapper {
    justify-content: flex-start;
  }
}
</style>

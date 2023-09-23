<template>
  <section v-if="useMobileMenu()" class="settings-mobile-menu-wrapper">
    <img
      alt="app-settings-mobile-menu"
      class="settings-mobile-icon"
      src="@/assets/settings-mobile-menu-icon.svg"
    />
  </section>
  <section v-else class="settings-wrapper">
    <div class="icon-wrapper">
      <img
        alt="app-settings-icon"
        class="settings-icon"
        src="@/assets/settings-icon.svg"
      />
    </div>
    <div class="icon-wrapper">
      <img
        alt="app-notifications-icon"
        class="notifications-icon"
        src="@/assets/notifications-icon.svg"
      />
    </div>
    <div class="user-login-wrapper">
      <div class="icon-wrapper">
        <img
          alt="app-user-icon"
          class="user-icon"
          src="@/assets/user-icon.svg"
        />
      </div>
      <span class="user-name">Adriana Arias</span>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'SettingsWrapper',
  setup() {
    return {}
  },
  data() {
    return {
      width: 885
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  components: {},
  methods: {
    useMobileMenu() {
      if (this.width <= 884) {
        return true
      } else {
        return false
      }
    },
    handleResize() {
      this.width = window.innerWidth
    }
  }
}
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
</style>

<template>
  <section class="settings-wrapper">
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
  components: {}
}
</script>

<style lang="scss">
.settings-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
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
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: 0.0175rem;
}
</style>

<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      validators: (value: string) => ['primary', 'secondary'].includes(value)
    },
    text: {
      type: String || Number
    }
  },
  computed: {
    buttonClass() {
      return ['base-button', this.variant]
    }
  }
}
</script>

<style lang="scss">
.base-button {
  display: inline-flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  border: none;
  font-family: var(--font-family-inter);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: 0.0175rem;
}

.primary {
  background: var(--purple-100);
  color: var(--white-100);

  &:hover {
    background: var(--purple-200);
    color: var(--white-200);
  }
}

.secondary {
  background: var(--white-300);
  color: var(--black-100);

  &:hover {
    color: var(--purple-100);
  }
}
</style>

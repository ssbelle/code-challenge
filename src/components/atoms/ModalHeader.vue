<template>
  <div class="modal-header">
    <h6 class="header-title">Macbook Pro 16 inch (2020 )</h6>
    <div class="close-modal-icon-wrapper" @click="this.showModalToggle()">
      <BaseIcon
        name="close-modal-icon"
        class="close-modal-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        iconColor="none"
      >
        <ModalCloseIcon />
      </BaseIcon>
    </div>
  </div>
</template>

<script lang="ts" setup name="ModalHeader">
import ModalCloseIcon from '@/components/icons/ModalCloseIcon.vue'

defineProps({
  showModalToggle: {
    type: Function
  }
})
</script>

<style lang="scss">
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .header-title {
    color: #1a1a1a;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    width: 25rem;
  }

  .close-modal-icon-wrapper {
    display: flex;
    padding: 0.5rem;
    align-items: flex-start;
    gap: 0.625rem;

    .close-modal-icon {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>

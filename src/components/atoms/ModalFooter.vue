<template>
  <div class="modal-footer">
    <BaseButton
      variant="secondary"
      text="Close"
      @click="this.showModalToggle()"
    />
  </div>
</template>

<script lang="ts" setup name="ModalFooter">
import BaseButton from '@/components/atoms/BaseButton.vue'

defineProps({
  showModalToggle: {
    type: Function
  }
})
</script>

<style lang="scss">
.modal-footer {
  display: flex;
  align-self: flex-end;
}

// Mobile Styles

@media (max-width: 884px) {
  .modal-footer {
    .base-button {
      width: 80vw;
    }
  }
}
</style>

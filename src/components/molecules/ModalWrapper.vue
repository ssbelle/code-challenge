<template>
  <Transition name="modal-slide">
    <div v-if="this.showModal" class="modal-mask">
      <div class="modal-container">
        <ModalHeader :showModalToggle="this.showModalToggle" />
        <ModalBody />
        <ModalFooter :showModalToggle="this.showModalToggle" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup name="ModalWrapper">
import ModalHeader from '@/components/atoms/ModalHeader.vue'
import ModalBody from '@/components/atoms/ModalBody.vue'
import ModalFooter from '@/components/atoms/ModalFooter.vue'

defineProps({
  showModal: {
    type: Boolean
  },
  showModalToggle: {
    type: Function
  }
})
</script>

<style lang="scss">
.modal-slide-enter-active {
  transition: all 0.3s ease-out;
}

.modal-slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-600);
  display: flex;
}

.modal-container {
  display: flex;
  width: 42.75rem;
  height: 38.5rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #fff;
}

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

.modal-body {
  display: flex;
  margin: 1rem 0 4rem;
  color: var(--black-300);
  font-family: var(--font-family-nunito);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5625rem;

  .modal-body-text {
    margin-top: 1rem;
    width: 17.0625rem;
  }
}

.modal-footer {
  display: flex;
  align-self: flex-end;
}

// Mobile Styles

@media (max-width: 884px) {
  .modal-container {
    width: 100%;
    height: calc(100vh - 3rem);
    margin-top: 6rem;
  }

  .modal-mask {
    background-color: rgba(0, 0, 0, 0);
  }

  .modal-body {
    flex-direction: column;
    align-self: center;
  }

  .modal-product-image {
    margin-top: -6rem;
  }

  .modal-body .modal-body-text {
    margin-top: -2rem;
    width: 20.0625rem;
  }
  .modal-footer {
    .base-button {
      width: 80vw;
    }
  }
}
</style>

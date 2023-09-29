<template>
  <Transition name="modal">
    <div v-if="this.showModal" class="modal-mask">
      <div class="modal-container">
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

        <div class="modal-body">
          <div class="modal-body-image">
            <img
              alt="app-modal-product-image"
              class="modal-product-image"
              src="@/assets/modal-product-image.png"
            />
          </div>
          <div class="modal-body-text">
            <span>Key Features</span>
            <ul>
              <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
              <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
              <li>16" 3072 x 1920 Retina Display</li>
              <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
            </ul>
            <span>
              The Apple 16" MacBook Pro features a 16" Retina Display, a Magic
              Keyboard with a redesigned scissor mechanism, a six-speaker
              high-fidelity sound system, and an advanced thermal design. This
              MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a
              7nm mobile discrete GPU designed for pro users. With 8GB of HBM2
            </span>
          </div>
        </div>

        <div class="modal-footer">
          <BaseButton
            variant="secondary"
            text="Close"
            @click="this.showModalToggle"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup name="ModalWrapper">
import BaseButton from '@/components/atoms/BaseButton.vue'
import ModalCloseIcon from '@/components/icons/ModalCloseIcon.vue'
// import { showModalToggle } from '@/composables/showModalToggle'

// const showModalValue = showModalToggle().value
// const showModalMethod = showModalToggle().method

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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-600);
  display: flex;
  transition: opacity 0.3s ease;
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

<template>
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
        high-fidelity sound system, and an advanced thermal design. This MacBook
        Pro also features an AMD Radeon Pro 5600M graphics card, a 7nm mobile
        discrete GPU designed for pro users. With 8GB of HBM2
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup name="ModalBody"></script>

<style lang="scss">
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

// Mobile Styles

@media (max-width: 884px) {
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
}
</style>

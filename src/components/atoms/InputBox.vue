<script lang="ts">
export default {
  setup() {
    return {}
  },
  components: {}
}
</script>

<template>
  <div class="search-box-wrapper">
    <img
      alt="app-search-box-icon"
      class="search-box-icon"
      src="@/assets/search-icon.svg"
    />
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Search"
      required
      minlength="2"
      maxlength="150"
    />
  </div>
</template>

<style>
input {
  display: flex;
  width: 16.25rem;
  height: 2.75rem;
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0rem 0.25rem 0.25rem 0rem;
  border: 1px solid var(--gray-400);
  background: var(--gray-100);
  color: var(--gray-200);
  font-family: var(--font-family-inter);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--gray-200);
    opacity: 1; /* Firefox */
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }
}

input:required:not(:disabled):not(:focus) {
  border: 1px solid var(--gray-300);
}

.search-box-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 1rem;

  img.search-box-icon {
    position: absolute;
  }
}

.search-box-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  position: absolute;
  margin: 0.5rem 0.5rem 0.5rem 1rem;
}
</style>

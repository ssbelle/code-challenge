<template>
  <section class="search-wrapper">
    <form id="app" @submit="validatedForm">
      <InputBox />
      <BaseButton variant="primary" text="Search" v-on:click="handleOnSubmit" />
    </form>
  </section>
</template>

<script setup lang="ts" name="SearchWrapper">
import { ref } from 'vue'
import { useProductsStore } from '@/store/products'
import InputBox from '@/components/atoms/InputBox.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const productsStore = useProductsStore()

const errorsState = ref('')

const handleOnSubmit = (e: any) => {
  if (validatedForm(e)) {
    filterProductsBySearch()
  } else {
    // Handle toast error message
    return
  }
}

const filterProductsBySearch = () => {
  productsStore.FETCH_PRODUCTS(productsStore.query)
}

/**
 * Validates query text from the input field before a query is submitted
 * @returns {Boolean} Returns the true if the query text is valid for characters and length.
 */
const validatedForm = (e: Event): boolean => {
  e.preventDefault()

  // Method to check that a query is only 50 characters or less
  const maxLength = 5
  const maxLengthCheck = (query: string) => {
    if (query.length > maxLength) {
      return true
    } else {
      return false
    }
  }

  let errors = []

  // Check first that the query does not contain special characters
  if (!/^[a-zA-Z0-9]*$/.test(`${productsStore.query.toString()}`)) {
    // If it does have special characters push the query and error msg to the errors array
    errors.push(
      'This is not a valid query, please use only letter and numbers.'
    )
  }
  // Check that the query has less than 50 characters in length
  if (maxLengthCheck(`${productsStore.query}`)) {
    // If it has too many characters push an error message to the errors array
    errors.push(
      `This is not a valid query, please use less than ${maxLength} characters.`
    )
  }

  if (errors.length > 0) {
    // If the errorArray has any errors return false and do not submit a query
    // Add last error to the errorState to be displayed in UI
    errorsState.value = errors[0]
    return false
  } else {
    // If the query is valid return true and allow query to be submitted
    return true
  }
}
</script>

<style lang="scss">
.search-wrapper {
  display: flex;
  flex: 2;
  order: 1;

  form {
    display: flex;
    margin: 0;
    padding: 0;
  }
}

// Mobile Styles
@media (max-width: 884px) {
  .search-wrapper {
    order: 2;
    margin-top: 1.38rem;
  }
}
</style>

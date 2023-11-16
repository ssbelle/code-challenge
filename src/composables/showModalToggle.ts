import { ref } from 'vue'

export function showModalHandler() {
  const showModal = ref(false)

  const showModalToggle = () => {
    showModal.value = !showModal.value
  }
  return { showModalToggle, showModal }
}

export default showModalHandler

import { ref, onMounted, onUnmounted, computed } from 'vue'

export function mobileHelper() {
  const width = ref(885)
  const height = ref(885)

  function handleResize() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.removeEventListener('resize', handleResize))

  const isMobileOrTablet = computed(() => {
    if (width.value <= 884) {
      return true
    } else {
      return false
    }
  })
  return isMobileOrTablet
}

export default mobileHelper

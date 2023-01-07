import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', () => {
  const isMenuOpen = ref<Boolean>(false)

  const menuTrigger = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  return { isMenuOpen, menuTrigger }
})

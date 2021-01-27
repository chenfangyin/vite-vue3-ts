import { ref, Ref, onMounted, onUnmounted } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  /**
   * @function contains()
   * @example node.contains(otherNode)
   * @returns boolean
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/contains
   */
  const handler = (e: MouseEvent) => elementRef.value && (isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement))
  onMounted(() => document.addEventListener('click', handler))
  onUnmounted(() => document.removeEventListener('click', handler))
  return isClickOutside
}

export default useClickOutside

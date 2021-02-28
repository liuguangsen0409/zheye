<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light my-2 dropdown-toggle" href="#" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" v-if="isOpen" :style="{ display: 'block' }">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    // const handler = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     // console.log(dropdownRef.value)
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handler)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler)
    // })
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

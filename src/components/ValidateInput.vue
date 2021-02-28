<template>
  <div class="validate-input-container pb-3">
    <input 
      type="text"
      class="form-control"
      v-model="inputRef.val"
      @blu="validateInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

interface RuleProp {
  type: 'required' | 'enail'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup () {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateInput = () => {

    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

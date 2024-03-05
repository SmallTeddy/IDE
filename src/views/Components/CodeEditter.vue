<template>
  <codemirror v-model="code" :style="{ height: '100%' }" :autofocus="true" :indent-with-tab="true" :tab-size="2"
    :extensions="extensions" @ready="handleReady" @change="log('change', $event)" @focus="log('focus', $event)"
    @blur="log('blur', $event)" />
</template>

<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const props = defineProps({
  code: ''
})

const code = ref()
const extensions = [javascript(), oneDark]

// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

watch(
  () => props.code,
  () => {
    code.value = props.code
  },
  {
    immediate: true
  }
)
</script>

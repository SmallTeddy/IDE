<script lang="ts" setup>
import Nav from "@/views/Layout/Nav.vue";
import Content from '@/views/Layout/Content.vue'
import { getAssetsFile } from '@/utils'

const state = useGlobalState()
</script>

<template>
  <main h-100dvh h-screen w-screen of-hidden bg-cover bg-center grid="~ rows-[max-content_1fr]"
    :style="{ backgroundImage: `url(${getAssetsFile(`${state.bgImage}.png`)})` }">
    <Nav />
    <Content />
  </main>
</template>

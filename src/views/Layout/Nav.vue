<script setup lang="ts">
import GitHubButton from '@/views/NavButton/GitHubButton.vue'
import FullScreenToggle from '@/views/NavButton/FullScreenToggle.vue'
</script>

<template>
  <nav w-screen px4 py3 text-lg bg-transparent border="b base" color-white flex="~ gap-1 items-center">
    <div title="Game">IDE</div>
    <div flex-auto></div>
    <!-- github按钮 -->
    <GitHubButton />
    <!-- 全屏按钮 -->
    <FullScreenToggle />
  </nav>
</template>

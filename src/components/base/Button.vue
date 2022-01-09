<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{ type: string }>()
</script>

<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  cursor: pointer;
}
</style>

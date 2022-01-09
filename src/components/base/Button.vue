<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val: string) => {
      return ['primary', 'plain', 'warning', 'secondary', 'success', 'black', 'passive'].includes(
        val
      )
    },
  },
})
</script>

<template>
  <button class="base-btn" :class="`${variant}-btn`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-btn {
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
  &.primary-btn {
    background-color: skyblue;
  }
}
</style>

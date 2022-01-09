<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div class="product-tile">
    <h3>{{ product.name }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.product-tile {
  padding: 16px 12px;
  border: 1px solid #ececec;
  border-radius: 5px;
}
</style>

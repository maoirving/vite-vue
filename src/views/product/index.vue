<script setup lang="ts">
import ProductTile from '@/components/product/tile.vue'
import { useProductList } from '../../composables/useProductList'

const { products } = useProductList()
</script>

<template>
  <div class="product-list-page">
    <h2>product lister</h2>
    <ul class="product-list">
      <li v-for="(product, index) in products" :key="index" class="product-list-item">
        <ProductTile :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.product-list-page {
  .product-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    &-item {
      width: 25%;
    }
  }
}
</style>

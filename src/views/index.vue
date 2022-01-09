<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/base/Button.vue'
const title = ref('Vite vue')
</script>

<template>
  <h1>{{ title }}</h1>
  <img alt="Vue logo" src="../assets/logo.png" />
  <router-link to="/products">product lister</router-link>
  <BaseButton>hello</BaseButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

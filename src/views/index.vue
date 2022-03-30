<template>
  <h1>{{ title }}</h1>
  <img alt="Vue logo" src="../assets/logo.png" />
  <router-link to="/products">product lister</router-link>
  <button @click="remove">remove</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Action, combineQuery } from '../helpers'

export default defineComponent({
  setup() {
    const { query } = useRoute()
    const title = ref('Vite vue')
    let newQuery = reactive<Record<string, any>>({})
    newQuery = combineQuery(query, [
      {
        key: 'A',
        values: ['a1', 'a2'],
        action: Action.Add,
      },
      {
        key: 'B',
        values: ['b1'],
        action: Action.Add,
      },
      {
        key: 'A',
        values: ['a12', 'a2', 'a12'],
        action: Action.Add,
      },
      {
        key: 'C',
        values: 'c1',
        action: Action.Add,
      },
      {
        key: 'D',
        values: ['d1', 'd2', 'd3'],
        action: Action.Add,
      },
    ])

    console.log(newQuery)

    const remove = () => {
      newQuery = combineQuery(newQuery, [
        {
          key: 'A',
          values: ['aa1', 'aa2'],
          action: Action.Add,
        },
        {
          key: 'B',
          values: 'bb2',
          action: Action.Replace,
        },
        {
          key: 'C',
          action: Action.Delete,
        },
        {
          key: 'D',
          values: 'd3',
          action: Action.Remove,
        },
      ])
      console.log(newQuery)
    }

    return {
      title,

      remove,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 600px;
  height: 500px;
  background-color: pink;
  .left {
    flex: 1 2 300px;
    background-color: yellow;
  }
  .right {
    flex: 2 1 200px;
    background-color: skyblue;
  }
}
</style>

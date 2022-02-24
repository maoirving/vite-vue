<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import BaseButton from '@/components/base/Button.vue'

export default defineComponent({
  components: {
    BaseButton,
  },

  setup() {
    const title = ref('Vite vue')

    const job = reactive({
      name: 'web',
      salary: '10k',
      require: 5,
    })
    const newJob = ref({
      name: 'dd',
    })
    const jobRequire = toRef(job, 'require')
    const setTitle = () => {
      jobRequire.value++
      console.log(job)
      console.log(newJob)
    }
    return {
      title,
      setTitle,
    }
  },
})
</script>

<template>
  <h1>{{ title }}</h1>
  <img alt="Vue logo" src="../assets/logo.png" />
  <router-link to="/products">product lister</router-link>
  <BaseButton variant="primary" @click="setTitle">hello</BaseButton>
</template>

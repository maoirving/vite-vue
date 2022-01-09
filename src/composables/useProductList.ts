import { ref } from 'vue'

export const useProductList = () => {
  const products = ref([
    {
      name: 'iPhone 13',
      url: '/url',
    },
    {
      name: 'iPhone 13',
      url: '/url',
    },
    {
      name: 'iPhone 13',
      url: '/url',
    },
    {
      name: 'iPhone 13',
      url: '/url',
    },
    {
      name: 'iPhone 13',
      url: '/url',
    },
  ])

  return {
    products,
  }
}

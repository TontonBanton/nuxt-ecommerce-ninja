<template>
  <div class="card text-center flex flex-col justify-between p-4">
    <img :src="product.image" alt="" class="thumb">
    <div>
      <p class="font-bold truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`"><p class="btn">View Details</p></NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
 .thumb {
  max-height: 150px;
  max-width: 70%;
  margin: 0 auto;
 }
</style>
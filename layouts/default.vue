<template>
    <header class="shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between">
        <li class="font-bold"><NuxtLink to="/">Nuxt ECom Home</NuxtLink> </li>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink> </li>
          <li><NuxtLink to="/about">About</NuxtLink> </li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink> </li>
        </ul>
      </nav>
    </header>
    <!-- PAGES SLOT -->
    <div class="bg-gray-300 container mx-auto p-4">
      <slot />
    </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: orange;
  }
</style>
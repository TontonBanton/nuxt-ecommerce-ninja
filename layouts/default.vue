<template>
    <header class="shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between">
        <li class="font-bold"><NuxtLink to="/">Virtual Shop</NuxtLink> </li>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink> </li>
          <li><NuxtLink to="/about">About</NuxtLink> </li>
          <li><NuxtLink to="/products">Products</NuxtLink> </li>
        </ul>
      </nav>
    </header>
    <!-- PAGES SLOT -->
    <div class="bg-white container p-4 rounded-lg mx-auto m-4">
      <slot />
    </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: orange;
  }
</style>
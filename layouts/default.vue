<template>
  <div>
    <header>
      <nav>
        <li><NuxtLink to="/">Nuxt Ecommerce</NuxtLink> </li>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink> </li>
          <li><NuxtLink to="/about">About</NuxtLink> </li>
          <li><NuxtLink to="/products">Products</NuxtLink> </li>
        </ul>
      </nav>
    </header>
  </div>

  <!-- PAGES SLOT -->
  <div>
    <slot/>
  </div>

</template>

<style scoped>
  .router-link-exact-active {
    color: orange;
  }
</style>
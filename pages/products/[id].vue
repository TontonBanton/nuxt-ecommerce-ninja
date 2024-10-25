<template>
  <div>
    <h2>Product Details for {{ id }}</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad est quos obcaecati, placeat ducimus,
      corrupti sint pariatur nam, tempore aliquam veniam. Neque harum eum quasi minima consequuntur dolor nemo in!</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params   //Get the route parameters
</script>


<style scoped>
</style>
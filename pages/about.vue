<template>
  <div>
    <div class="flex justify-center">
      <img src="/joji2.jpg" alt="Joji Image" class="my-7 w-auto max-w-sm" />
    </div>
    <h2>About</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam ipsum nostrum, porro atque eius
      expedita itaque distinctio reiciendis nesciunt at officiis quis architecto vel laudantium dolorem! Aut, provident sapiente.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam ipsum nostrum, porro atque eius
      expedita itaque distinctio reiciendis nesciunt at officiis quis architecto vel laudantium dolorem! Aut, provident sapiente.</p>

    <div> {{ data }}</div>
  </div>
</template>

<script setup>

  const { data, error } = await useFetch('/api/test')
  if (error.value) {
    console.error(error.value)
  }
  //SERVER ROUTES
  //const { data } = await useFetch('/api/test')
  //const { data } = await useFetch('/api/test?name=leling')
  // const { data } = await useFetch('/api/test?name=leling', {
  //   method: 'post',
  //   body: {
  //     age: 30
  //   }
  // })

</script>

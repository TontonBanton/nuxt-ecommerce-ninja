// import { defineEventHandler, getQuery, readBody } from 'h3'

// export default defineEventHandler(async (event) => {
//   const { name } = getQuery(event)
//   const { age } = await readBody(event)
//   return {
//     message: `Hello, ${name || 'Guest'}, are you ${age} years old`
//   }

// })


import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const data = await $fetch('https://api.coingecko.com/api/v3/search/trending')
  console.log(data)
  return { data } // Wrap the response in an object
})

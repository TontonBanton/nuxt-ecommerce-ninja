import { defineEventHandler } from 'h3'
export default defineEventHandler(async (event) => {
  //const data = await $fetch('https://api.coingecko.com/api/v3/search/trending')
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_n1cQujKqW0egOHD9BFGDzTBsEAyxUyw30z91wd7A')
  return  data
})


//TRIALS----
// import { defineEventHandler, getQuery, readBody } from 'h3'
// export default defineEventHandler(async (event) => {
//   const { name } = getQuery(event)
//   const { age } = await readBody(event)
//   return {
//     message: `Hello, ${name || 'Guest'}, are you ${age} years old`
//   }
// })


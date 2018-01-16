<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>
<script>
  const get = () => ({data: { title: 'Mi blog', name: 'Juan' }})

  export default {
    layout: 'blog',
    async asyncData ({ params }) {
      let { data } = await get(`https://my-api/posts/${params.id}`)
      return { title: data.title, name: data.name }
    },
    fetch () {
      // The `fetch` method is used to fill the store before rendering the page
    },
    head () {
      return {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ],
        title: this.title
      }
    }
  }
</script>
<style>

</style>

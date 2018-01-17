<template>

  <section class="row">
    <div class="col-xs-12 col-sm-6 col-md-4" v-for="post in posts">
      <article-post
        :title="post.title"
        :titleUrl="post.titleUrl"
        :description="post.description"
      />
    </div>

  </section>

</template>
<script>
  import ArticlePost from '~/components/ArticlePost.vue'
  const get = () => ({data: { title: 'Mi blog', name: 'Juan' }})

  export default {
    components: {
      ArticlePost
    },
    layout: 'blog',
    async asyncData ({ params }) {
      let { data } = await get(`https://my-api/posts/${params.id}`)
      return {
        title: data.title,
        name: data.name,
        posts: [
          {
            title: 'title 1',
            titleUrl: 'title-1',
            description: 'Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra'
          },
          {
            title: 'title 2',
            titleUrl: 'title-2',
            description: 'Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra'
          },
          {
            title: 'title 3',
            titleUrl: 'title-3',
            description: 'Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra'
          }
        ]
      }
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

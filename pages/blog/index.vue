<template>

  <section class="row">
    <div class="col-xs-12 col-sm-6 col-md-4" v-for="post in posts">
      <article-post
        :title="post.title"
        :titleUrl="post.titleUrl"
        :description="post.description"
        :date="post.date"
        :totalShared="post.totalShared"
        :imgMedium="post.imgMedium"
      />
    </div>
  </section>

</template>
<script>
import apollo from "~/plugins/apollo"
import ArticlePost from "~/components/ArticlePost.vue"
import gql from "graphql-tag"

const postsQuery = gql`
    query {
        posts {
            title
            description
            date
            imgMedium
        }
    }
`

export default {
    components: {
        ArticlePost
    },
    layout: "blog",
    computed: {
        posts() {
            return this.$store.state.posts.list
        }
    },
    methods: {},
    async asyncData({ params, store }) {
        return {
            title: "blog title",
            name: "blog name"
        }
    },
    async mounted() {
        apollo.query({ query: postsQuery }).then((res) => {
            this.$store.commit("posts/set", res.data.posts)
        })
    },
    head() {
        return {
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Roboto"
                }
            ],
            title: this.title
        }
    }
}
</script>
<style>

</style>

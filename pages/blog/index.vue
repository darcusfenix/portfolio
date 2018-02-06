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
    <button v-on:click="addPost" >add post</button>
  </section>

</template>
<script>
import { mapMutations } from "vuex"
import axios from "~/plugins/axios"
import ArticlePost from "~/components/ArticlePost.vue"

const get = () => {
    return new Promise((resolve, reject) => {
        axios
            .get("/api/posts")
            .then(function(response) {
                resolve(response.data)
            })
            .catch(function(error) {
                reject([])
            })
    })
}

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
    methods: {
        addPost(e) {
            this.$store.commit("posts/add", {
                title: "title 3",
                titleUrl: "title-3",
                description:
                    "3 Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra",
                date: "11 de Feb.",
                totalShared: 10,
                imgMedium: "http://lorempixel.com/350/200/"
            })
        },
        ...mapMutations({
            toggle: "todos/toggle"
        })
    },
    async asyncData({ params, store }) {
        return {
            title: "blog title",
            name: "blog name"
        }
    },
    async mounted() {
        let data = await get()
        this.$store.commit("posts/set", data)
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

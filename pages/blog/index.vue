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
import ArticlePost from "~/components/ArticlePost.vue"

const get = () => {
    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve([
                    {
                        title: "!Renuncio!",
                        titleUrl: "renuncio",
                        description:
                            "¿Ya estás listo para renunciar? ¿Sabes si es el momento? ¿Por qué lo haces?",
                        date: "1 de Feb.",
                        totalShared: 250,
                        imgMedium: "http://lorempixel.com/350/200/"
                    },
                    {
                        title: "title 2",
                        titleUrl: "title-2",
                        description:
                            "2 Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra",
                        date: "5 de Feb.",
                        totalShared: 50,
                        imgMedium: "http://lorempixel.com/350/200/"
                    },
                    {
                        title: "title 3",
                        titleUrl: "title-3",
                        description:
                            "3 Lorem ipsum dolor sit amet, nec ante integer eget, dolor lectus consequat vehicula lorem mattis, ultricies mauris elit nostra",
                        date: "11 de Feb.",
                        totalShared: 10,
                        imgMedium: "http://lorempixel.com/350/200/"
                    }
                ]),
            3000
        )
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
        let data = await get(`https://my-api/posts/${params.id}`)

        store.commit("posts/set", data)
        return {
            title: "blog title",
            name: "blog name"
        }
    },
    fetch() {
        // The `fetch` method is used to fill the store before rendering the page
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

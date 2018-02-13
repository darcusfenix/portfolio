<template>
  <div>
    <article-header
      :title="header.title"
      :description="header.description"
      :imgBg="header.imgBg"/>

    <section class="blog-single">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="single-blog-article">
              <article class="type-article single-article">

                <article-image
                  :title="article.title"
                  :date="article.date"
                  :imgLarge="article.imgLarge"
                  :imgAltLarge="article.imgAltLarge"/>

                <div class="article-content">
                  <div v-for="item in article.content">

                    <div class="dropcap" v-if="item.type === 'dropcap'">
                      <p>{{item.text}}</p>
                    </div>

                    <p v-if="item.type === 'p'">{{item.text}}</p>

                    <blockquote v-if="item.type === 'blockquote'">
                      <p>{{item.text}}</p>
                    </blockquote>

                    <h4 v-if="item.type === 'h4'">{{item.text}}</h4>

                    <article-figure
                      :type="item.type"
                      :caption="item.caption"
                      :alt="item.alt"
                      :img="item.img"/>

                  </div>
                </div>

                <article-meta
                  :box="metaBox"
                  :social="social"/>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ArticleHeader from "~/components/ArticleHeader"
import ArticleImage from "~/components/AritcleImage"
import ArticleFigure from "~/components/ArticleFigure"
import ArticleMeta from "~/components/ArticleMeta"
import apollo from "~/plugins/apollo"
import gql from "graphql-tag"

export default {
    components: {
        ArticleHeader,
        ArticleImage,
        ArticleFigure,
        ArticleMeta
    },
    layout: "blog",
    async asyncData({ params }) {
        return {
            header: {
                title: "BLOG DETAILS",
                description:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                imgBg: "http://lorempixel.com/g/1900/600/"
            },
            metaBox: {
                author: "Juan Crisóstomo",
                totalComments: 15
            }
        }
    },
    computed: {
        article() {
            return this.$store.state.posts.item
        },
        social() {
            return this.$store.state.posts.social
        }
    },
    async mounted() {
        const postQuery = gql`
            query {
                post(id: "${this.$route.query.id}") {
                    title
                    date
                    content {
                      type,
                      text,
                      img,
                      alt,
                      caption
                    }
                },
                social {
                    _id
                    type
                    className
                    url
                    active
                }
            }
        `
        apollo
            .query({ query: postQuery })
            .then((res) => {
                this.$store.commit("posts/setItem", res.data.post)
                this.$store.commit("posts/social", res.data.social)
            })
            .catch((e) => {
                console.error(e)
                this.$router.push("/blog")
            })
    },
    head() {
        return {
            title: this.article.title
        }
    }
}
</script>
<style>
.blog-single {
    padding: 60px 0;
}

.type-article {
    padding: 15px;
    background: #fff;
    box-shadow: rgba(58, 78, 95, 0.2) 0 10px 16px,
        rgba(58, 78, 95, 0.05) 0 -5px 16px;
    margin-bottom: 30px;
}

.type-article p {
    line-height: 1.7;
    margin-bottom: -60px;
}

.type-article h4 {
    margin-bottom: -60px;
}

.single-article blockquote {
    padding: 0px 20px;
    margin: 30px 0;
    border-left: 5px solid #ccc;
    font-style: italic;
    font-size: 14px;
}
</style>

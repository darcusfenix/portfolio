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
                  :imgLarge="imgLarge"
                  :imgAltLarge="imgAltLarge"/>

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
            imgLarge: "http://lorempixel.com/720/400/",
            imgAltLarge: "Blog List",
            article: {
                title: "Take a Look Around our App",
                date: "Novembar 24, 2017",
                content: [
                    {
                        type: "dropcap",
                        text:
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. C0 um sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <i>commodo</i> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    },
                    {
                        type: "p",
                        text:
                            'Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et <a href="#">magnis</a> dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <u>Aenean commodo</u> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                    },
                    {
                        type: "blockquote",
                        text:
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                    },
                    {
                        type: "h4",
                        text: "Lorem ipsum dolor sit amet"
                    },
                    {
                        type: "figure-left",
                        caption: "This is an short caption",
                        alt: "Blog",
                        img: "http://lorempixel.com/250/350/"
                    },
                    {
                        type: "p",
                        text:
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    },
                    {
                        type: "h4",
                        text: "Lorem ipsum dolor sit amet"
                    },
                    {
                        type: "figure-right",
                        caption: "This is an short caption",
                        alt: "Blog",
                        img: "http://lorempixel.com/250/350/"
                    },
                    {
                        type: "p",
                        text:
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    },
                    {
                        type: "h4",
                        text: "Lorem ipsum dolor sit amet"
                    },
                    {
                        type: "figure-center",
                        caption: "This is an short caption",
                        alt: "Blog",
                        img: "http://lorempixel.com/750/250/"
                    },
                    {
                        type: "p",
                        text:
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    }
                ]
            },
            social: [
                {
                    type: "icon-fa",
                    className: "fa fa-heart-o",
                    url: "https://twitter.com/DARCUSFENIX"
                },
                {
                    type: "icon-fa",
                    className: "fa fa-facebook",
                    url: "https://twitter.com/DARCUSFENIX"
                },
                {
                    type: "icon-fa",
                    className: "fa fa-twitter",
                    url: "https://twitter.com/DARCUSFENIX"
                },
                {
                    type: "icon-fa",
                    className: "fa fa-google-plus",
                    url: "https://twitter.com/DARCUSFENIX"
                },
                {
                    type: "icon-fa",
                    className: "fa fa-pinterest",
                    url: "https://twitter.com/DARCUSFENIX"
                }
            ],
            metaBox: {
                author: "Juan Crisóstomo",
                totalComments: 15
            }
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

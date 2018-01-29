<template>
  <div>
    <blog-header
      :title="header.title"
      :description="header.description"
      :imgBg="header.imgBg" />

    <section class="blog-single">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="single-blog-article">
              <article class="type-article single-article">
                <div class="article-image">
                  <img :src="imgLarge" :title="imgLarge" :alt="imgAltLarge">
                  <div class="title-bar">
                    <label>
                      <a href="#">Work</a>
                    </label>
                    <h3>Take a Look Around our App</h3>
                    <span class="article-date">Novembar 24, 2017</span>
                  </div>
                </div>
                <div class="article-content">
                  <div class="dropcap">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. C0
                      um sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit. Aenean <i>commodo</i> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                  </div>
                  <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et <a href="#">magnis</a>
                    dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    <u>Aenean commodo</u> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <blockquote><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p></blockquote>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <figure class="alignleft">
                    <img src="http://beyarsolutions.com/miki/miki/static/img/alignleft.png" title="Blog" alt="blog">
                    <figcaption class="caption-text">This is an short caption</figcaption>
                  </figure>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <figure class="alignright">
                    <img src="http://beyarsolutions.com/miki/miki/static/img/alignright.png" title="Blog" alt="blog">
                    <figcaption class="caption-text">This is an short caption</figcaption>
                  </figure>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <h4>Lorem ipsum dolor sit amet</h4><p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <figure class="aligncenter">
                    <img src="http://beyarsolutions.com/miki/miki/static/img/aligncente.png" title="Blog" alt="blog">
                    <figcaption class="caption-text">This is an short caption</figcaption>
                  </figure>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    <strong>Cum sociis natoque</strong> penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.</p>
                </div>
                <div class="article-meta"><div class="meta-box"> <span><em>By</em> Luther</span> <span><a href="#"><i class="fa fa-comment-o"></i>3 comments</a></span>
                </div>
                  <div class="article-share">
                    <a href="#"><i class="fa fa-heart-o"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
import BlogHeader from "~/components/BlogHeader.vue"

export default {
    components: {
        BlogHeader
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
            imgAltLarge: "Blog List"
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
.type-article .article-image {
    margin-bottom: 20px;
    position: relative;
}
.type-article .title-bar {
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.65);
}
.type-article .title-bar label {
    font-style: italic;
    margin: 0;
    padding: 0;
    font-size: 13px;
}
.type-article .title-bar h3 {
    font-weight: 600;
    font-size: 26px;
    margin: 0;
    padding: 0 0 5px;
    color: #fff;
}
.type-article .title-bar .article-date {
    color: #fff;
    font-size: 12px;
}
.type-article p {
    line-height: 1.7;
}
.single-article blockquote {
    padding: 0px 20px;
    margin: 30px 0;
    border-left: 5px solid #ccc;
    font-style: italic;
    font-size: 14px;
}
.type-article .article-meta {
    width: 100%;
    display: inline-block;
    vertical-align: top;
    border-top: 1px solid #ddd;
    padding: 15px 0 0;
    margin-top: 15px;
}
.type-article .article-meta .meta-box {
    float: left;
}
.type-article .article-meta .meta-box span {
    font-size: 12px;
    margin-right: 8px;
}
.type-article .article-meta .meta-box span a {
    color: #000;
}
.type-article .article-meta .article-share {
    float: right;
}
.type-article .article-meta .article-share a {
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 50%;
    display: inline-block;
    color: #888;
    font-size: 14px;
}
</style>

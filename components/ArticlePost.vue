// @flow
<template>
  <div class="article-post">
    <div class="article-post-thumbnail">
      <a :href="url">
        <img :src="imgMedium" :alt="imgAltPrincipal">
      </a>
    </div>
    <div class="article-post-intro">
      <h5><a :href="url">{{title}}</a></h5>
      <p>{{description}}</p>
      <ul class="article-post-meta list-inline">
        <li class="list-inline-item"><a href="#">{{date}}</a></li>
        <li class="list-inline-item"><a href="#">{{totalShared}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    props: [
        "id",
        "title",
        "titleUrl",
        "description",
        "date",
        "totalShared",
        "imgMedium",
        "imgAltPrincipal"
    ],
    computed: {
        url() {
            return `/blog/${this.titleUrl}.html?id=${this.id}`
        }
    }
}
</script>
<style>
.article-post {
    margin-bottom: 30px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: 0.5s all;
}
.article-post-thumbnail img {
    width: 100%;
}
.article-post-intro {
    padding: 30px;
}
.article-post-intro h5 {
    line-height: 30px;
}
.article-post-meta {
    margin-bottom: 5px;
    position: relative;
    margin-top: 30px;
}
</style>

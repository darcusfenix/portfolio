// @flow
<template>
  <div class="article-image">
    <img :src="imgLarge" :title="imgAltLarge" :alt="imgAltLarge">
    <div class="title-bar">
      <h3>{{title}}</h3>
      <span class="article-date">{{date}}</span>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        title: String,
        date: String,
        imgLarge: String,
        imgAltLarge: String
    }
}
</script>
<style>
.article-image {
    margin-bottom: 20px;
    position: relative;
}

.title-bar {
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.65);
}

.title-bar label {
    font-style: italic;
    margin: 0;
    padding: 0;
    font-size: 13px;
}

.title-bar h3 {
    font-weight: 600;
    font-size: 26px;
    margin: 0;
    padding: 0 0 5px;
    color: #fff;
}

.title-bar .article-date {
    color: #fff;
    font-size: 12px;
}
</style>

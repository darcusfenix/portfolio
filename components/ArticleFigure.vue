// @flow
<template>
  <figure v-bind:class="className">
    <img :src="img" :title="alt" :alt="alt">
    <figcaption class="caption-text">{{caption}}</figcaption>
  </figure>
</template>
<script>
export default {
    props: {
        type: String,
        img: String,
        alt: String,
        caption: String
    },
    computed: {
        className: function() {
          const ft = this.type.split("-")[1];
            let type
            switch (ft) {
                case "right":
                    type = "right"
                    break
                case "left":
                    type = "left"
                    break
                case "center":
                default:
                    type = "center"
                    break
            }
            return `article-figure-${type}`
        }
    }
}
</script>
<style>
.article-figure-right {
    float: right;
    margin: 0.5em 0 0.5em 2em;
    text-align: right;
}
.article-figure-left {
    float: left;
    margin: 0.5em 2em 0.5em 0;
}
.article-figure-center {
    display: block;
    margin: 1.5em auto;
    text-align: center;
}
</style>

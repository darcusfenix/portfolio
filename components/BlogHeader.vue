// @flow
<template>
  <section class="blog-banner-wrapped" v-bind:style="styleObject">
    <div class="container">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  </section>
</template>
<script>
export default {
    props: {
        title: String,
        description: String,
        imgBg: String
    },
    computed: {
        styleObject: function() {
            return {
                backgroundImage: `url(${this.imgBg})`
            }
        }
    }
}
</script>
<style>
.blog-banner-wrapped {
    padding: 200px 0 100px;
    text-align: center;
    position: relative;
    background-color: #000;
    background-repeat: no-repeat;
    background-position: center;
}
.blog-banner-wrapped .container {
    position: relative;
    z-index: 1;
}
.blog-banner-wrapped h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 15px;
}
.blog-banner-wrapped p {
    color: #fff;
    width: 550px;
    max-width: 100%;
    margin: 0 auto;
}
</style>

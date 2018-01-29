// @flow
<template>
  <div class="article-meta">
    <div class="meta-box">
      <span><em>By</em> {{box.author}}</span>
      <span>
        <i class="fa fa-comment-o"></i>{{box.totalComments}}
      </span>
    </div>
    <div class="article-share">
      <a v-for="item in social" :href="item.url">
        <i v-if="item.type === 'icon-fa'" :class="item.className"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        box: {
            author: String,
            totalComments: Number
        },
        social: Array
    }
}
</script>
<style>
.article-meta {
    width: 100%;
    display: inline-block;
    vertical-align: top;
    border-top: 1px solid #ddd;
    padding: 15px 0 0;
    margin-top: 15px;
}

.article-meta .meta-box {
    float: left;
}

.article-meta .meta-box span {
    font-size: 12px;
    margin-right: 8px;
}

.article-meta .meta-box span a {
    color: #000;
}

.article-meta .article-share {
    float: right;
}

.article-meta .article-share a {
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

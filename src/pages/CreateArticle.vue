<template>
  <div>
    <h2>Create Article</h2>
    <hr>
    <div>
      <input v-model="article.title" type="text" placeholder="Article Title">
      <input v-model="article.content" type="text" placeholder="Article Content">
      <button @click="postArticle">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      article: {
        id: '',
        title: '',
        content: '',
        createdAt: ''
      }
    }
  },
  methods: {
    postArticle () {
      if (localStorage.getItem('articles') === null) {
        localStorage.setItem('articles', JSON.stringify({articles: []}))
      }
      let obj = JSON.parse(localStorage.getItem('articles'))
      this.article.id = obj.articles.length + 1
      this.article.createdAt = new Date().toISOString().slice(0, 10)
      obj.articles.push(this.article)
      localStorage.setItem('articles', JSON.stringify(obj))
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>

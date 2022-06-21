<template>
  <div>
    <h2>{{ article.title }}</h2>
    <hr>
    <p>Article Content: {{ article.content }}</p>
    <hr>
    <p>Created Date: {{ article.createdAt }}</p>
    <p>Upvotes: 0</p>
    <p>Downvotes: 0</p>
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

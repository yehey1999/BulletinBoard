<template>
  <div>
    <button @click="goToCreateArticle">Create New Article</button>
    <hr>
    <div v-for="article in articles" :key="article.id" @click="showArticle">
      <p>{{ article.title }}</p>
      <p>{{ article.content }}</p>
      <p>{{ article.createdAt }}</p>
      <button>Edit</button>
      <button>Delete</button>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.articles = JSON.parse(localStorage.getItem('articles')).articles
  },
  data: function () {
    return {
      articles: []
    }
  },
  methods: {
    goToCreateArticle: function () {
      this.$router.push('/create')
    },
    showArticle: function () {
      this.router.push('/article/'+id);
    }
  }
}
</script>

<style>
</style>

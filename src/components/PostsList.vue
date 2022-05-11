<template>
  <div class="post">
    <router-link :to="{ name: 'PostDetail', params: { id: posts.id } }">
      <h2>{{ posts.title }}</h2>
    </router-link>
    <p>{{ posts.text }}</p>
    <div class="tags" v-for="tag in posts.tags" :key="tag">{{ tag }}</div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style>
</style>
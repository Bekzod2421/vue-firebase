<template>
  <div class="post">
    <h2>{{ posts.title }} ok</h2>
    <p>{{ posts.text }} text</p>
    <div class="tags" v-for="tag in posts.tags" :key="tag">{{ tag }} tag</div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style>
</style>
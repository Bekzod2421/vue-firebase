<template>
  <div class="post">
    <h2>{{ id }}</h2>
    <!-- <p></p> -->
    <!-- <div class="tags" v-for="tag in posts.tags" :key="tag">{{ tag }} tag</div> -->
  </div>
</template>

<script>
export default {
  props: ["id"],
  setup() {},
};
</script>

<style>
</style>
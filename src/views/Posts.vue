<template>
  <p v-if="error">
    {{ error }}
  </p>
  <div class="post-wrap" v-if="posts.length">
    <div v-for="post in posts" :key="post.id">
      <!-- <h1>{{ post.title }}</h1> -->
      <PostsList :posts="post" />
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPosts from "../composable/getPosts";
import PostsList from "../components/PostsList.vue";
import Spinner from "../components/Spinner.vue";
export default {
  name: "posts",
  components: { PostsList, Spinner },
  setup() {
    const { posts, error, load } = getPosts("posts");
    load();
    console.log(posts.value);
    return { posts, error };
  },
};
</script>

<style>
</style>
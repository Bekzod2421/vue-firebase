<template>
  <p v-if="error">
    {{ error }}
  </p>
  <div class="post-wrap" v-if="posts.length">
    <div v-for="post in posts" :key="post.id">
      <PostsList :posts="post" />
      <router-link
        class="update-btn"
        :to="{ name: 'UpdatePost', params: { id: post.id } }"
        >Update this post</router-link
      >
      <router-link
        class="delete-btn"
        :to="{ name: 'DeletePost', params: { id: post.id } }"
        >Delete this post</router-link
      >
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
    return { posts, error };
  },
};
</script>

<style>
.delete-btn,
.update-btn {
  background-color: gray;
  color: #fff;
  padding: 10px 15px;
  display: inline-block;
  border-radius: 15px;
  margin: 20px auto;
  text-decoration: none;
  font-weight: bold;
}
.update-btn {
  margin-right: 10px;
}
.delete-btn:hover {
  background-color: crimson;
}
.update-btn:hover {
  background-color: #42b983;
}
</style>
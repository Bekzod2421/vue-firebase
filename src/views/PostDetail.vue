<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post.length">
    <h2>{{ post.title }}</h2>
    <p>{{ post.text }}</p>
    <div v-for="tag in post.tags" :key="tag">
      {{ tag }}
    </div>
    <time :datetime="post.time">{{ post.time }}</time>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../composable/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    console.log(props.id);
    console.log(post.value);
    return { post, error };
  },
};
</script>

<style>
</style>
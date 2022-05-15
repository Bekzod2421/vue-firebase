<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="done"></div>
  <div v-else><Spinner /></div>
</template>

<script>
import deletePost from "../composable/deletePost";
import Spinner from "../components/Spinner.vue";
import { useRouter } from "vue-router";
export default {
  name: "DeletePost",
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const router = useRouter();
    console.log(props.id);
    const { done, error, load } = deletePost("posts", props.id);
    load().then(() => {
      router.push({ name: "posts" });
    });
    return { done, error };
  },
};
</script>

<style>
</style>
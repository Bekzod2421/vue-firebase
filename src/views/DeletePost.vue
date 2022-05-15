<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="done"></div>
  <div v-else><Spinner /></div>
</template>

<script>
import deletePost from "../composable/deletePost";
import Spinner from "../components/Spinner.vue";
export default {
  name: "DeletePost",
  props: ["id"],
  components: { Spinner },
  setup(props) {
    console.log(props.id);
    const { done, error, load } = deletePost("posts", props.id);
    load();
    return { done, error };
  },
};
</script>

<style>
.delete-btn {
  background-color: gray;
  color: #fff;
  padding: 10px 15px;
  display: inline-block;
  border-radius: 15px;
  margin: 20px auto;
  text-decoration: none;
  font-weight: bold;
}
.delete-btn:hover {
  background-color: crimson;
}
</style>
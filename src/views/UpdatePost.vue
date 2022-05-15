<template>
  <div v-if="error">{{ error }}</div>
  <div>
    <form @submit.prevent="updateP()">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" :value="post.title" />
      </div>
      <div>
        <label for="text">Text</label>
        <input type="text" id="text" :value="post.text" />
      </div>
      <div>
        <label for="tags">Tags</label>
        <input type="text" id="tags" :value="post.tags" />
      </div>
      <button class="cancel">Cancel</button>
      <input type="submit" class="update" value="OK" />
    </form>
  </div>
  <div><Spinner /></div>
</template>

<script>
import updatePost from "../composable/updatePost";
import getPost from "../composable/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  name: "DeletePost",
  props: ["id"],
  components: { Spinner },
  methods: {
    updateP() {
      // const newPost = {
      //   title: this.title,
      //   text: this.text,
      //   tags: this.tags,
      //   time: this.time,
      // };
      // const { done, error, load } = updatePost("posts", this.id, this.newPost);
      // load();
    },
  },
  setup(props) {
    const { post, error, load } = getPost("posts", props.id);
    load();
    return { post, error };
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
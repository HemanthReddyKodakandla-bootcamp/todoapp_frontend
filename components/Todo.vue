<template>
  <div class="todo-item">
    <p>{{ item.title }}</p>
    <div class="btns" v-if="item.user_id == $store.state.user_id">
      <b-button pill size="sm" variant="warning">Update</b-button>
      <b-button pill size="sm" variant="danger">Delete</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.todo-item {
  display: flex;
  padding: 8px 16px;
  background-color: rgb(249, 249, 249);
  border: 1px solid grey;
  border-radius: 12px;
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
}
</style>
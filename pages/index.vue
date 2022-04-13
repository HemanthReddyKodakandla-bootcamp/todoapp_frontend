<template>
  <div>
    <LoginForm v-if="token == null" />

    <div class="todo-list" v-if="todos.length > 0">
      <TodoItem v-for="item in todos" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LoginForm from '@/components/LoginForm.vue'
import TodoItem from '@/components/Todo.vue'

export default {
  name: 'IndexPage',

  components: {
    LoginForm,
    TodoItem,
  },

  computed: {
    ...mapState(['token', 'todos']),
  },
}
</script>

<template>
  <div class="hello">
    <input type="text" class="input-todo" v-model="todo">
    <button class="add" @click="addTodo()">add todo</button>
    <h3>{{ msg }}</h3>
  </div>
  <ul class="todos" v-if="todos.items && todos.items.length > 0">
    <li class="todo" :class="{del: todo.done}" v-for="todo in todos.items" track-by="$index" v-text="todo.text"></li>
  </ul>
</template>

<script>
  import store from '../store';
  import { addTodo as addTodoAction } from '../actions/todos';

  export default {
    data() {
      return {
        msg: 'Hello World! COUCOU',
        todo: '',
        todos: this.$select('todos')
      };
    },
    ready() {
      store.actions.addTodo('damn');
    },
    methods: {
      toggleTodo(index) {
        store.dispatch(store.actions.toggleTodo(index));
      },
      addTodo(todo = this.todo) {
        if (!todo) {
          return;
        }
        store.dispatch(store.actions.addTodo(todo));
        this.todo = '';
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: #42b983;
  }
</style>

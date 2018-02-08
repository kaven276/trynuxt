<template>
 <ul class="list-group">
  <li class="list-group-item" @click="$store.commit('increment')">$store.state.counter = {{$store.state.counter}}</li>
  <li class="list-group-item" v-for="todo in $store.state.todos.list" :key="todo.text">
    <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
    <span :class="{ done: todo.done }"> {{ todo.text }}</span>
  </li>
  <li class="list-group-item"><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
</ul>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  head: {
    title: '项目试验目标列表',
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value);
      e.target.value = '';
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
};
</script>
